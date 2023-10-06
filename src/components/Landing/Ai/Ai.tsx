import React from 'react'
import Image from 'next/image'
import robot from '/public/images/robot.svg'
const Ai = () => {
  return (
   <div className='sec flex justify-between items-center pr-24' >
   <Image src={robot} className='h-[300px] ' alt='robot' />
   <div className='text-xl font-medium' >
     <div className='text-[#85DEDE]' >MEET YOUR AI TEACHER</div>
     <div>MEET YOUR AI TEACHER</div>
     <div  className='text-[#67AFC357]'>MEET YOUR AI TEACHER</div>
   </div>
   </div>
  )
}

export default Ai