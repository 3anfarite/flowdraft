import Link from "next/link"
import Image from 'next/image';
import gif from '../assets/Workflowsgif.gif'
import grass from '../assets/grasshopperLogo.png'
import rheno from '../assets/rheno.png'
import TestCard from './TestCard';
import SmallCard from "./SmallCard";


export default function Hero({hero}) {
  return (


    <div className="px-6 my-24 py-12 md:px-12 bg-gray-50 text-black text-center lg:text-left">
      <div className="container mx-auto xl:px-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-eb xl:text-6xl font-bold tracking-tight mb-12">{hero.title}</h1>
            <p className="mb-4 font-alt "> {hero.para} </p>
            <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
         
                <a href="#discover-more" className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
                  Discover More
                </a>
         
            </div>
          </div>
          <div className="relative mb-12 lg:mb-0">
            <Image src={gif} alt="office content 1" />
            <TestCard/>
            <SmallCard/>
          </div>
        </div>
      </div>
    </div>
  )
}
