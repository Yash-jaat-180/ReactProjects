import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-1 mb-20'>
            <div className="textStructure mt-40 px-20 ">
                <div className="masker">
                    <h1 className='text-8xl leading-[7vw] tracking-tight font-medium text-[7vw] '>WE CREATE</h1>
                </div>
                <div className="masker flex">
                    <motion.div 
                    initial={{width: 0}} 
                    animate={{width: "8vw"}} 
                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                    className='h-[6vw] bg-cover rounded-lg mr-2 w-[8vw] relative top-3 bg-red-700 bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]'>

                    </motion.div>
                    <h1 className="text-8xl leading-[7vw] tracking-tight font-medium text-[7vw] ">EYE-OPENING
                    </h1>
                </div>
                <div className="masker">
                    <h1 className='text-8xl leading-[7vw] tracking-tight font-medium text-[7vw] '>PRESENTATIONS</h1>
                </div>
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between px-10 pt-5'>
                {["For Public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start flex items-center gap-2">
                    <div className='px-4 py-2 border-[1px] border-zinc-500 rounded-full font-light texy-sm capatalize'>START THE PROJECT</div>
                    <div className='flex items-center justify-center w-10 h-10 rounded-br-full border-zinc-500 border-[1px] rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
