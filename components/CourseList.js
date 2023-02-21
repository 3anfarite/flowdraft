import React from 'react'
import Course from './Course'

const CourseList = () => {
   return (
      <div className="bg-cgrey" id="discover-more">
         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-4 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">Most watched courses</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
               <Course/>
               <Course/>
               <Course/>
            </div>
         </div>
      </div>
   )
}

export default CourseList