import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);



    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            console.log(angle - 180);
            setRotate(angle - 180);
        })
    }, [])
    return (
        <div className='eyes w-full overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center flex items-center justify-center overflow-hidden'>
                <div className='flex absolute gap-5'>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-[10vw] h-[10vw] rounded-full bg-zinc-900 relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-[10vw] h-[10vw] rounded-full bg-zinc-900 relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-[2vw] h-[2vw] rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
