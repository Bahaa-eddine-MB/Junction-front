import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import { slides } from '@/data'
import Star from '@/components/icons/star'
import Image from 'next/image';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const Formation = () => {
  return (
   <div className='my-8 py-2' >
   <p className='text-center text-3xl font-semibold py-16'>Nos Formations</p>
   <Swiper
             freeMode={true}
             grabCursor={true}
             modules={[FreeMode]}
             className="mySwiper2"
             id="cards" 
             breakpoints={{
               0: { slidesPerView: 1, spaceBetween: 30 },
               480: { slidesPerView: 3, spaceBetween: 10 },
               768: { slidesPerView: 3, spaceBetween: 200},
               1420: { slidesPerView: 5, spaceBetween: 200 },
             }}
           >
             {slides.map((slide, i) => (
               <SwiperSlide key={i}>
                 <div
           className="flex flex-col items-center"
          >
 
                   <div className="w-[320px]  aspect-[5/7] mx-auto  rounded-8xl  snap-x px-2 cursor-pointer group perspective">
                     <div className="relative preserve-3d group-hover:my-rotate-y-180 bg-[#073946] rounded-xl shadow-xl w-full h-full duration-700">
                       <div className="absolute backface-hidden rounded-xl  object-cover w-full h-full">
                      
                         <Image
                         alt='image'
                           src={slide.image}
                           className=" rounded-xl"
                         />
                     <div>
 <p className="text-xl mb-1 transform -rotate-3 uppercase  text-white font-bold">{slide.name}</p>
  
    <div>
     <div>  </div>
     <div className='flex content-center mx-auto items-center' > 
       <p className='text-xl text-[#E4E81E] ' > <span>4</span> /5 </p>
  <Star className='w-8 h-8' />
        </div>
    </div>
           </div>
                       </div> 
                     
                        
                       
                   
                       <div className="card absolute my-rotate-y-180 rounded-xl bg-[#073946]  backface-hidden w-full h-full  overflow-hidden">
                         <div className="card-content text-center flex flex-col items-center justify-center h-full   text-black px-2 pb-24  ">
                           <p>{slide.content}</p>
                           <div className="flex space-x-2 justify-center">
                             <Link href="/">
                               <button className="inline-block px-6 py-2 bg-gray-800 text-white font-medium text-xs rounded-full justify-center top-10 relative ">
                                 View more
                               </button>
                             </Link>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   </div>
              
               </SwiperSlide>
             ))}
           </Swiper>
           </div>
  )
}

export default Formation