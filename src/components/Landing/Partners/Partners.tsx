import React from 'react'
import Image from 'next/image'
import brand1 from '/public/images/brand1.svg'
import brand2 from '/public/images/brand2.svg'
import brand3 from '/public/images/brand3.svg'
import brand4 from '/public/images/brand4.svg'
import brand5 from '/public/images/brand5.svg'

const  sponsors = [
 brand1,
 brand2,
 brand3,
 brand4,
 brand5,
 ]

const Partners = () => {

  return (
   <div className='py-2' >
   <p className='text-center text-xl font-semibold' >Trusted By</p>
 <div className='flex justify-between items-center px-4 mx-auto max-w-[1000px]' >
{sponsors.map((img,i)=> 
<Image src={img} className='w-24' key={i} alt='brand' />
)}

 </div>
 </div>
  )
}

export default Partners