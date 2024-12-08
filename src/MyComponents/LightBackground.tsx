"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./AuroraBackground"

function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center text-white">
                    Foster Management Center
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-white">
                    Nurturing Tomorrow's Leaders with Care, Innovation, and Excellence
                </div>
                <button className="bg-white dark:bg-white rounded-full w-fit text-black dark:text-black px-4 py-2 hover:bg-gray-300 duration-300">
                    Explore Our Programs
                </button>
            </motion.div>
        </AuroraBackground>
    );
}

export default AuroraBackgroundDemo