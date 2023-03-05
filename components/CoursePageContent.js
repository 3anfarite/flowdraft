import React from 'react'
import Accordion from './Accordion';

const CoursePageContent = () => {
   return (
      <section className="text-black body-font">



         <div className="container px-5 py-24 mx-auto" >
            <div className="mb-10 max-h-screen bg-cdetail bg-cover bg-center">

               <div className="w-full py-40 h-full flex  justify-center items-center backdrop-brightness-50">
                  <span className="text-cgrey font-eb text-5xl w-1/2 text-center">Course Title</span>
               </div>
            </div>
            <div className="grid grid-cols-1 gap-4  sm:grid-cols-3">
               <div className="col-span-2 bg-white sm:col-span-2 p-10">

                  <h2 className="text-3xl font-eb pb-5 font-semibold text-black leading-tight">
                     Course Detail Title
                  </h2>

                  <p className="leading-relaxed text-lg font-alt mb-10">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>

                  <p className="leading-relaxed text-lg font-alt mb-10">What you’ll learn?</p>
                  <ul className="mb-8 space-y-4 text-left text-gray-500 font-alt dark:text-gray-400">
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Individual configuration</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>No setup, or hidden fees</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                  </ul>

                  <p className="leading-relaxed text-lg font-alt mb-10">Requirements</p>
                  <ul className="mb-8 space-y-4 text-left text-gray-500 font-alt dark:text-gray-400">
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Individual configuration</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>No setup, or hidden fees</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                  </ul>

                  {/* Bonus */}

                  <p className="leading-relaxed text-lg font-alt mb-10">Bonus</p>
                  <ul className="mb-8 space-y-4 text-left text-gray-500 font-alt dark:text-gray-400">
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Individual configuration</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>No setup, or hidden fees</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Team size: <span className="font-semibold text-gray-900 dark:text-white">1 developer</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                     <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span className="font-semibold text-gray-900 dark:text-white">6 months</span></span>
                     </li>
                  </ul>
               </div>
               <div className="col-span-1 sm:col-span-1">
                  <img src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="pb-5 w-full object-cover " style={{ height: "28em" }} />
                  <Accordion />



                  <button className='font-ibm font-semibold my-5 w-full h-14 px-6 text-white bg-black hover:bg-gray' >
                     Enroll Now for $39.99
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CoursePageContent