import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import './styles/global.css'

const App = () => {
  return (
    <div className='bg-[#000235] relative text-white overflow-x-hidden'>
      <div className='gradient1' />
      <div className='gradient2' />
      <Navbar />
      <Hero />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
