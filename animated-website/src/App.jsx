import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import HeadlingMoving from './Components/HeadlingMoving'
import About from './Components/About'
import Eyes from './Components/Eyes'
import FeaturedProject from './Components/FeaturedProject'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  // we are using the scrolling through locomotive library
  // locomotiveScroll.ca is the link of website
  // We also used framer motion and gsap for this website
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <HeadlingMoving/>
      <About/>
      <Eyes/>
      <FeaturedProject/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
