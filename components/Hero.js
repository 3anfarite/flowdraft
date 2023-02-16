import Link from "next/link"

export default function Hero() {
  return (
    <div className="md:bg-hero  md:bg-center md:bg-contain md:bg-no-repeat bg-mhero bg-center bg-cover " >
      <div className="py-96 mx-auto px-4 text-center md:backdrop-blur-[3px] ">
        <h1 className="font-extrabold text-gray-900">
          
          <p className="text-xl sm:text-3xl body-font font-eb md:text-4xl"></p>
          <p className="font-semibold text-black font-eb text-4xl sm:text-6xl md:block hidden md:text-8xl">unlock your architectural vision</p>
        </h1>
        <h2 className="mt-3 max-w-md mx-auto text-gray sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        </h2>
       {/*  <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
          <Link href="/about">
            <a className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
              About Me
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-flex items-center font-semibold text-gray hover:text-gray h-12 px-6 mr-6 border-transparent">
              Learn more
            </a>
          </Link> 
        </div>*/}
      </div>
    </div>

  )
}
