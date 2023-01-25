import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between text-white py-8 px-32'>
      <div className='text-6xl font-bold'>SAC<span className='text-[#9090DC]'>.</span></div>
      <div className='flex flex-row gap-16 text-xl items-center font-extralight'>
        <div>About</div>
        <div>Event</div>
        <div>Team</div>
        <div>Resources</div>
      </div>
    </div>
  )
}

export default Navbar
