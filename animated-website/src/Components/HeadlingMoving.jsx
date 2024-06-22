import React from 'react'
import {motion} from 'framer-motion';

function HeadlingMoving() {
    
    return (
        <>
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] py-20 rounded-t-3xl'>
            <div className="w-full border-b-2 border-t-2 border-zinc-300 flex overflow-hidden whitespace-nowrap gap-10">
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6}} className='marque text-[16vw] leading-none '>WE ARE OOCHI </motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6}}  className='marque text-[16vw] leading-none'>WE ARE OOCHI</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 6}}  className='marque text-[16vw] leading-none'>WE ARE OOCHI</motion.h1>
            </div>
        </div>
        </>
    )
}

export default HeadlingMoving
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 200 to 700

