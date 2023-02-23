import React from 'react'
import Course from './Course'

const CourseList = () => {
   return (
      <div className="bg-cgrey" id="discover-more">
         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-10 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">Most watched courses</h2>

            <div className="flex flex-wrap ">
               <Course/>
               <Course/>
               <Course/>
            </div>
         </div>
      </div>
   )
}

export default CourseList