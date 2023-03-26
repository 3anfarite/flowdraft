import React from 'react'
import Course from './Course'

const CourseList = ({courses}) => {
   return (
      <div className="bg-cgrey">
        <div className="flex flex-col text-center w-full">

        <h1 class="mb-12 text-5xl tracking-tight font-eb font-bold text-black ">Nos Formations</h1>

            <div className="flex flex-wrap ">
           { courses.map(course => (
               <Course key={course.id} course={course} />
             ))
           }
            </div>
         </div>
      </div>
   )
}

export default CourseList

