import React from 'react'

const Testimonials = () => {
  return (
    
   <div className="text-white bg-black my-24">
   <div className="container px-24 py-24 mx-auto">
   <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-5xl font-extrabold font-eb mb-4 text-white">See what our students say about the courses</h1>
      <p className="lg:w-2/3 mx-auto font-alt leading-relaxed text-base">{`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.`}</p>
    </div>
     <div className="flex flex-wrap -m-4">
       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
         <div className="h-full text-center">
           <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block " src="https://source.unsplash.com/user/wsanter"/>
           <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           <span className="inline-block h-1 w-10 rounded bg-cgrey mt-6 mb-4"></span>
           <h2 className="text-white font-bold font-alt tracking-wider  text-base">HOLDEN CAULFIELD</h2>
           <p className="text-white font-light font-alt">Senior Product Designer</p>
         </div>
       </div>
       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
         <div className="h-full text-center">
           <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block " src="https://source.unsplash.com/user/wsanter"/>
           <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           <span className="inline-block h-1 w-10 rounded bg-cgrey mt-6 mb-4"></span>
           <h2 className="text-white font-bold font-alt tracking-wider text-base">ALPER KAMU</h2>
           <p className="text-white font-light font-alt">UI Develeoper</p>
         </div>
       </div>
       <div className="lg:w-1/3 lg:mb-0 p-4">
         <div className="h-full text-center">
           <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block  " src="https://source.unsplash.com/user/wsanter"/>
           <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
           <span className="inline-block h-1 w-10 rounded bg-cgrey mt-6 mb-4"></span>
           <h2 className="text-white font-bold font-alt tracking-wider text-base">HENRY LETHAM</h2>
           <p className="text-white font-light font-alt">CTO</p>
         </div>
       </div>
     </div>
   </div>
   </div>
  )
}

export default Testimonials