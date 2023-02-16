import React from 'react'
import CourseCard from './CourseCard';
import aboutImage3 from '../assets/aboutSection3.jpeg'
import aboutImage2 from '../assets/aboutSection2.jpeg'
import aboutImage1 from '../assets/aboutSection1.jpeg'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

const CoursesSection = () => {

   SwiperCore.use([Pagination, EffectFade, Autoplay])


   const autoplay = {
      delay: 2000,
      disableOnInteraction: true,
   };
   const effect = 'fade';
   const fadeEffect = {
      crossFade: true,
   };

   return (

      <>

         <div className="bg-cgrey dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
               <div className="font-normal text-black order-1 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">We didn't reinvent the wheel</h2>
                  <p className="mb-4 font-alt ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. </p>
                  <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
                     <Link href="/courses">
                        <a className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                           See all courses
                        </a>
                     </Link>
                  </div>
               </div>

               <div className="gap-4 mt-8 py-10">
                  <Swiper
                     slidesPerView={1}
                     autoplay={autoplay}
                     loop={true}
                     effect={effect}
                     fadeEffect={fadeEffect}
                  >
                     <SwiperSlide>
                        <Image className="" src={aboutImage3} alt="office content 1" />

                     </SwiperSlide>

                     <SwiperSlide>

                        <Image className="" src={aboutImage1} alt="office content 1" />
                     </SwiperSlide>

                     <SwiperSlide>

                        <Image className="" src={aboutImage2} alt="office content 1" />
                     </SwiperSlide>

                  </Swiper>
               </div>

            </div>
         </div>


         {/* <div className=" py-12 px-4 mx-auto max-w-screen-xl flex bg-cgrey items-center justify-center">
            <div className="grid grid-cols-9 gap-2 gap-y-4 max-w-6xl">
               <CourseCard />
               <CourseCard />
               <CourseCard />
            </div>
         </div> */}
      </>

   )
}

export default CoursesSection