import React from 'react'
import Course from '../components/Course'
import dynamic from 'next/dynamic'

const courses = () => {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      
      
    </div>
  </div>
</div>
  )
}

export default dynamic(() => Promise.resolve(courses), {
  ssr: false
})