import Image from 'next/image'
import Link from 'next/link'
import aboutImage from '../assets/aboutSection.jpg'

const AboutSection = () => {
   return (
      <section className="bg-cgrey dark:bg-gray-900">
         <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-normal  text-black sm:text-lg dark:text-gray-400">
               <h2 className="mb-4 text-5xl tracking-tight font-eb font-bold md:text-black text-black ">{"We didn't reinvent the wheel"}</h2>
               <p className="mb-4 font-alt ">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
               <p className='font-alt ' >We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid gap-4 mt-8">
               <Image className="w-full" src={aboutImage} alt="office content 1"/>
                  
            </div>
         </div>
      </section>

   )
}

export default AboutSection