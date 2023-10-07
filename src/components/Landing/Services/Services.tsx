import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import { slides } from '@/data'
import woman2 from '/public/images/woman2.svg'
import man from '/public/images/man.svg'
import Image from 'next/image';
import formation from '/public//images/formation.svg'
import stitle from '/public//images/stitle.svg'
import stitle3 from '/public//images/stitle3.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Data = [
 {image1 : woman2,
 image2: formation,
text: "De l'apprentissage ludique à l'expertise pointue, nous proposons des programmes pour tous les niveaux"},
 {image1 : man,
 image2: stitle,
text: "Nous concevons des solutions logicielles et matérielles personnalisées pour répondre à vos besoins."},
 {image1 : woman2,
 image2: stitle3,
text: "Projets audacieux, coaching sur mesure, succès garanti. Nous sommes là à chaque étape de votre parcours"}
]

const Services = () => {
  return (
   <div className='car w-full ' >

   <Swiper
         slidesPerView={"auto"}
         spaceBetween={30}
         freeMode={true}
         
         pagination={{
           clickable: true,
         }}
         modules={[FreeMode, Pagination]}
         className="mySwiper"
    >
      {Data?.map((item, index) => (
        <SwiperSlide key={index}>
     <div className='grid grid-cols-2 items-center px-8' >
     <div >
       <Image src={item.image1} className='w-96' alt='woman' />
     </div>
     <div>
     <Image src={item.image2} alt='woman' />
     <p className='text-wrap my-2' >{item.text}</p>
     </div>
     </div>
        </SwiperSlide>
      ))}
    </Swiper>
    
   </div>
  )
}

export default Services