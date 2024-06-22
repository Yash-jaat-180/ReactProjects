import { motion } from 'framer-motion'
import { Linear } from 'gsap';
import React, { useState } from 'react'

function FeaturedProject() {
    const [isHovering1, setHovering1] = useState(false);
    const [isHovering2, setHovering2] = useState(false);
    // There also an method without using states to animate it Watch in vedio

    return (
        <>
            <div className='w-full pt-20 pb-10 px-20 border-b-[1px] border-zinc-500'>
                <h1 className='text-white text-[4vw] '>Featured Image</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10  mt-20 pb-10'>
                    <div onMouseEnter={() => setHovering1(true)} onMouseLeave={() => setHovering1(false)} className='cardContainer relative w-1/2 h-[75vh]'>
                        <h1 className='flex absolute overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-[13vh] font-bold'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span 
                                initial={{ y: "100%" }} 
                                animate={isHovering1 ? ({y: "0"}) : ({y: "100%"})} 
                                transition={{ease: [0.16, 1, 0.3, 1], delay: index * .03}}
                                key={index} 
                                className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} className='cardContainer relative w-1/2 h-[75vh]'>
                        <h1 className='flex absolute overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-[50%] text-[#CDEA68] z-[9] text-[13vh] font-bold'>
                            {"TRAWA".split("").map((item, index) => (
                                <motion.span 
                                initial={{ y: "100%" }} 
                                animate={isHovering2 ? ({y: "0"}) : ({y: "100%"})} 
                                transition={{ease: [0.16, 1, 0.3, 1], delay: index * .03}}
                                key={index} 
                                className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <motion.img 
                            initial={{scale: "1"}}
                            animate={isHovering2 ? ({scale: "0.94"}) : ({scale: "1"})}
                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                            className='w-full h-full bg-cover rounded-2xl block'
                            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" 
                            alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default FeaturedProject
