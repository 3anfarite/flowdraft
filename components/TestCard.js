import React from 'react'
import {motion } from 'framer-motion'

const TestCard = () => {
   return (


      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}
      className="absolute hidden md:block -left-10 -bottom-16 w-40 md:w-60 lg:w-64 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 items-center bg-cgrey rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] md:max-w-xl">
         <div className='flex px-4 pt-4' >
            <img className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" alt="" />
            <div className='' >
               <p className="text-xs lg:text-base font-bold tracking-tight font-alt text-black">John Do</p>
               <p className="text-xs lg:text-xs font-light tracking-tight font-alt  text-black">Graphic Designer</p>
            </div>
         </div>
         <div className=" py-2 leading-normal">
            <p className="mx-4 lg:text-base md:text-base text-xs font-normal text-black ">Best courses, easy to understand and well structured</p>
         </div>
      </motion.div>


   )
}

export default TestCard