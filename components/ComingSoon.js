import Image from 'next/image'
import React from 'react'
import logo from '../assets/workflowLogo.png'


const ComingSoon = () => {
   return (
      <div class="flex items-center justify-center">
         <div class="container">
            <div class="mx-2 my-10">
               <div class="text-center">
                  <div className="mb-6 relative mx-auto ">
                     <Image width={275} height={130} className="" src={logo} alt="" />
                  </div>
                  <h3 class='text-2xl font-bold font-eb md:text-4xl'>Coming Soon!</h3>
<h3 class='text-lg font-bold font-eb md:text-2xl text-gray '>
Stay tuned for something amazing!!!</h3>
                  
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default ComingSoon