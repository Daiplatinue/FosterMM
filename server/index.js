import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRoutes.js'

const app = express()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))

app.use(express.json())

// Mount auth router
app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    console.log("req.body")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is Running on port " + PORT)
})