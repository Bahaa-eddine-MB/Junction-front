import React from 'react'
import Image from 'next/image'
import news1 from '/public/images/news1.svg'
import news2 from '/public/images/news2.svg'
import chance from '/public/images/chance.svg'
const NewsLetter = () => {
  return (
   <div className='relative w-full' >
      
   <Image src={news1} alt='e' className='w-48 h-48 absolute -right-4' />
   <Image src={news2} alt='e' className='w-48 h-48 absolute -left-[80px]' />

 <div className='flex items-center justify-center flex-col' >
   <div>
     <Image src={chance} alt='es' />
   </div>
   <div className='my-8' >
     
<form className='bg-[#E9F0F3] px-4 py-2 rounded-3xl flex justify-between items-center gap-2' >   

<input type="search" id="default-search" className=" p-4 pl-10 text-sm  border  rounded-3xl bg-[#FFFFFF66] outline-none " placeholder="a_hamoudi@estin.dz" required/>
<button type="submit" className="text-white   bg-[#1BAAD1] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 ">JOIN</button>

</form>

   </div>
 </div>

          </div>
  )
}

export default NewsLetter