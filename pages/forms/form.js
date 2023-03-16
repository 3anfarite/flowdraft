import Link from "next/link"

const form = () => {
  return (
    <div className="mb-6" >
      <Link href='/forms/hero' >
      <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
         
         <a  className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
           Edit Hero Section
         </a>
  
     </div>
      </Link>

      <Link href="/forms/course-section" >
      <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
         
         <a  className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
           Edit Course Section
         </a>
  
     </div>
      </Link>

      <Link href="/forms/testomonials" >
      <div className="mt-5 max-w-md mx-auto hidden md:flex justify-center items-center md:mt-8">
         
         <a  className="inline-flex items-center font-ibm justify-center h-12 px-6 mr-6 font-semibold py-3 border-transparent text-white bg-black hover:bg-gray">
           Edit Testomonials
         </a>
  
     </div>
      </Link>

    </div>
  )
}

export default form

