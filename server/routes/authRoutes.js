import express from 'express'
import { connectToDatabase } from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'

const router = express.Router()
const upload = multer()

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: "No Token Provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userId = decoded.id;
        next()
    } catch (err) {
        return res.status(500).json({ message: "Server error" })
    }
}


router.post('/register', async (req, res) => {
    const {
        fosterTraining,
        fosterParent,
        homeEnvironment,
        groupAge,
        supportSystem,
        email,
        password
    } = req.body;

    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users_tb WHERE u_email = ?', [email])

        if (rows.length > 0) {
            return res.status(409).json({ message: "User already exists" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        await db.query(
            `INSERT INTO users_tb (
                u_fosterTraining,
                u_fosterParent,
                u_homeEnvironment,
                u_groupAge,
                u_supportSystem,
                u_email,
                u_password,
                u_status,
                u_role
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                fosterTraining,
                fosterParent,
                homeEnvironment,
                groupAge,
                supportSystem,
                email,
                hashPassword,
                'pending',
                'adopt'
            ]
        )

        return res.status(201).json({ message: "User created successfully" })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Server error", error: err.message })
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users_tb WHERE u_email = ?', [email])
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, rows[0].u_password)
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong password" })
        }
        const token = jwt.sign({ id: rows[0].u_id }, process.env.JWT_KEY, { expiresIn: '3h' })

        return res.status(201).json({
            token: token,
            user: {
                id: rows[0].u_id,
                email: rows[0].u_email,
                status: rows[0].u_status,
                role: rows[0].u_role
            }
        })
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message })
    }
})

router.post('/submit-form', verifyToken, upload.fields([
    { name: 'frontIdImage', maxCount: 1 },
    { name: 'backIdImage', maxCount: 1 }
]), async (req, res) => {
    try {
        const {
            salaryRange,
            currentAddress,
            age,
            language,
            religion,
            culturalBackground,
            familyBackground,
            aboutYourself,
            reasonAdoption,
            idType,
            signature
        } = req.body;

        const frontIdImage = req.files['frontIdImage'] ? req.files['frontIdImage'][0].buffer : null;
        const backIdImage = req.files['backIdImage'] ? req.files['backIdImage'][0].buffer : null;

        const db = await connectToDatabase();

        await db.query(
            `INSERT INTO forms_tb (
                u_id,
                f_salaryRange,
                f_currentAddress,
                f_age,
                f_language,
                f_religion,
                f_cultural,
                f_familyBack,
                f_aboutYourself,
                f_reasonAdopt,
                f_idType,
                f_frontID,
                f_backID,
                f_signature
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                req.userId,
                salaryRange,
                currentAddress,
                age,
                language,
                religion,
                culturalBackground,
                familyBackground,
                aboutYourself,
                reasonAdoption,
                idType,
                frontIdImage,
                backIdImage,
                signature
            ]
        );

        return res.status(201).json({ message: "Form submitted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
});

router.get('/home', verifyToken, async (req, res) => {
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users_tb WHERE u_id = ?', [req.userId])
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        return res.status(201).json({ user: rows[0] })
    } catch (err) {
        return res.status(500).json({ message: "Server error" })
    }
})

router.get('/pending-accounts', verifyToken, async (req, res) => {
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query(
            'SELECT u_id, u_email, u_fosterTraining, u_fosterParent, u_homeEnvironment, u_groupAge, u_supportSystem, u_status FROM users_tb WHERE u_status = ?',
            ['pending']
        )
        return res.status(200).json(rows)
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message })
    }
})

router.get('/active-accounts', verifyToken, async (req, res) => {
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query(`
            SELECT u.u_id, u.u_email, u.u_status, 
                   f.f_salaryRange, f.f_currentAddress, f.f_age, 
                   f.f_language, f.f_religion, f.f_cultural, 
                   f.f_familyBack, f.f_aboutYourself, f.f_reasonAdopt,
                   f.f_idType, f.f_frontID, f.f_backID, f.f_signature
            FROM users_tb u
            LEFT JOIN forms_tb f ON u.u_id = f.u_id
            WHERE u.u_status != 'pending'
        `)

        const processedRows = rows.map(row => ({
            ...row,
            f_frontID: row.f_frontID ? `data:image/jpeg;base64,${row.f_frontID.toString('base64')}` : null,
            f_backID: row.f_backID ? `data:image/jpeg;base64,${row.f_backID.toString('base64')}` : null,
            f_signature: row.f_signature ? `data:image/png;base64,${row.f_signature.toString('base64')}` : null
        }))

        return res.status(200).json(processedRows)
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message })
    }
})

router.put('/update-status/:userId', verifyToken, async (req, res) => {
    const { status } = req.body
    const { userId } = req.params

    try {
        const db = await connectToDatabase()
        await db.query(
            'UPDATE users_tb SET u_status = ? WHERE u_id = ?',
            [status, userId]
        )
        return res.status(200).json({ message: "Status updated successfully" })
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message })
    }
})

export default router;