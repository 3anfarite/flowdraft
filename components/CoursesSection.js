import React from 'react'
import CourseCard from './CourseList';
import aboutImage3 from '../assets/aboutSection3.jpeg'
import aboutImage2 from '../assets/aboutSection2.jpeg'
import aboutImage1 from '../assets/aboutSection1.jpeg'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

const CoursesSection = ({courseInfo}) => {

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

         <div className="bg-cgrey my-24 ">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
               <div className="font-normal items-center  text-black order-1 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-5xl text-center tracking-tight font-eb font-bold md:text-black text-black ">Nous n'avons pas réinventé la roue.</h2>
                  <p className="mb-4 font-alt ">Workflows est une startup dotée d'une équipe de créatifs, architectes, et technologistes. Nous proposons des services de formation, de modélisation et de design paramétrique et computationnel pour tout vos projets complexes et non-standard. <a href="www.wwworkflows.com" >  </a> </p>
                  <div className="mt-5 max-w-md mx-auto md:flex justify-center items-center md:mt-8">
                     <Link href="/courses">
                        <a className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                           See all courses
                        </a>
                     </Link>
                  </div>
               </div>

               <div className="gap-4 mt-8 py-10">
                  {/* <Swiper
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

                  </Swiper> */}
                  <div class="aspect-w-16 aspect-h-9">
                     <iframe src="https://www.youtube.com/embed/VB3UhQQhJ34?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen aut ></iframe>
                  </div>
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