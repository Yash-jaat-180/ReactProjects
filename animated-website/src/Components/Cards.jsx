import React from 'react'

function Cards() {
    return (
        <div className='overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed=".-3" className="w-full h-screen flex gap-10 px-20 border-t-[1px] border-zinc-600 py-20">
                <div className='relative w-[42vw] h-[50vh] bg-[#004D43] rounded-xl '>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    </div>
                    <div className='absolute bottom-10 left-8 text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-3xl px-3 py-2'>@2019-2022</div>
                </div>
                <div className="relative card w-[20vw] h-[50vh] bg-[#212121] rounded-xl">
                    <div className='w-full h-full flex items-center justify-center'>
                        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <div className='absolute bottom-10 left-8 text-zinc-400 border-[2px] border-zinc-400 rounded-3xl px-3 py-2 uppercase font-semibold text-[0.9vw]'>Rating 5.0 on Clutch</div>
                    </div>
                </div>
                <div className="relative card w-[20vw] h-[50vh] bg-[#212121] rounded-xl">
                    <div className='w-full h-full flex items-center justify-center'>
                        <img width={102} height={104} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    </div>
                    <div className='absolute bottom-10 left-8 text-zinc-400 border-[2px] border-zinc-400 rounded-3xl px-3 py-2 uppercase font-semibold text-[0.9vw]'>Business Bootcamp alumni</div>
                </div>
            </div>
        </div>
    )
}

export default Cards
