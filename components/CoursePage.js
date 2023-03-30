import React, {useState} from 'react'
import Course from './Course';

const CoursePage = ({courses}) => {



   return (
      <section className="pt-20 px-10 lg:pt-[120px] pb-10 lg:pb-20">
         <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
               <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">

                  <h2
                     className="font-bold text-5xl font-eb sm:text-4xl md:text-[40px] text-black mb-4"
                  >
                     Nos formations sur demande:
                  </h2>
                  <p className="text-base font-alt text-black">
                  Nous offrons trois formations incluant les meilleurs workflows de production pour votre carrière d'architecte technologue                  </p>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap ">
            {
               courses.map(course => (
                  <Course key={course.id} course={course} />
               ))
            }
         </div>


      </section>
   )
}

export default CoursePage