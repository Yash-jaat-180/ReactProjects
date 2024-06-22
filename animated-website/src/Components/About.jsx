import React from 'react'

function About() {
    return (
        <div className='bg-[#CDEA68] h-full w-full overflow-hidden pt-10 -mt-[4vw]'>
            <div>
                <div className='pr-[26vw] pl-[10vw] border-b-2 border-zinc-500'>
                    <h1 className='text-[3.4vw] text-black -tracking-[4px] leading-[4.5vw] py-16 '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
                </div>
            </div>
            <div className='flex justify-between py-[4vw] px-[4vw] border-b-2 border-zinc-500'>
                <div className=''>
                    <p className='text-black font-semibold '>What you can expect:</p>
                </div>
                <div className='flex justify-center pl-[40vw] pr-[30vw]'>
                    <p className='text-black '>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                        <br />
                        <br />
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </div>
                <div className='text-black '>
                    S: <br />
                    <br />
                    Instagram <br />
                    Behance <br />
                    Facebook <br />
                    Linkedin <br />
                </div>
            </div>
            <div className='flex justify-between px-7'>
                <div className='py-6 px-4'>
                    <h1 className='text-[3vw] font-semibold text-black'>Our approach: </h1>
                    <div className='bg-zinc-900 rounded-full w-[10vw] flex'>
                        <button className='text-white flex justify-center items-center py-4 pl-5'>READ MORE<div className='w-3 h-3 rounded-full bg-white relative left-3'></div></button>
                    </div>
                </div>
                <div className='py-7 px-7 '>
                    <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img" />
                </div>
            </div>
        </div>
    )
}

export default About
