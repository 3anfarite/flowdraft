import Image from 'next/image'
import React from 'react'
import logo from '../assets/workflowLogo.png'


const login = () => {
  return (
   <section className="bg-cgrey py-12 ">
   <div className="flex flex-col items-center  px-6 mx-auto md:h-screen lg:py-0">
       <a href="#" className="flex items-center mb-6 text-2xl font-bold text-black ">
       <Image src={logo} width={75} height={30} />
       </a>
       <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0 ">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold font-ibm leading-tight tracking-tight text-black md:text-2xl">
                   Sign in to your account
               </h1>
               <form className="space-y-4 md:space-y-6" action="#">
                   <div>
                       <label for="email" className="block mb-2 text-sm font-medium text-black ">Your email</label>
                       <input type="email" name="email" id="email" className="bg-cgrey border-gray-300 text-black sm:text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                   </div>
                   <div>
                       <label for="password" className="block mb-2 text-sm font-medium text-black ">Password</label>
                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-cgrey text-black sm:text-sm   focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                   </div>
                   <div className="flex items-center justify-between">
                       <div className="flex items-start">
                           <div className="flex items-center h-5">
                             <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                           </div>
                           <div className="ml-3 text-sm">
                             <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                           </div>
                       </div>
                       <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                   </div>
                   <button type="submit" className="w-full text-white bg-black hover:bg-gray focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-gray dark:focus:ring-primary-800">Sign in</button>
                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                       Don’t have an account yet? <a href="#" className="font-medium font-ibm text-white hover:underline dark:text-primary-500">Sign up</a>
                   </p>
               </form>
           </div>
       </div>
   </div>
 </section>
  )
}

export default login