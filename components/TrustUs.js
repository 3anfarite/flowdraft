import React from 'react'
import almaxyra from '../assets/trustUs/almaxyra.png'
import artCom from '../assets/trustUs/artCom.png'
import holmarcom from '../assets/trustUs/holmarcom.png'
import iaac from '../assets/trustUs/iaac.png'
import olivium from '../assets/trustUs/olivium.png'
import hdeuxa from '../assets/trustUs/hdeuxa.png'
import Image from 'next/image' 
import orangeAtelier from '../assets/trustUs/orangeAtelier.jpg'

const TrustUs = () => {
  return (

   <section className="bg-white py-20 lg:py-[120px]">
     <div className="container px-12 mx-auto">
       <div className="-mx-4 flex flex-wrap">
         <div className="w-full px-4">
         <h1 className="text-5xl text-center font-extrabold font-eb mb-4 pb-20 text-black">Ils nous ont fait confiance</h1>
          
           <div className="flex flex-wrap items-center justify-center">
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={almaxyra}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={orangeAtelier}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={iaac}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={olivium}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={artCom}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={hdeuxa}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
             <a 
               className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
             >
               <Image
                 src={holmarcom}
                 alt="image"
                 className="h-10 w-full"
               />
             </a>
           </div>
         </div>
       </div>
     </div>
   </section>
   
     )
}

export default TrustUs