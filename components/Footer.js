import Image from "next/image"
import logo from '../assets/lightworkflow.png'
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Terms and Conditions', href: '#' }
]

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-black shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link href="/" className="flex flex-wrap justify-center items-center mb-6">
            <Image src={logo} width={75} height={30} alt="workflow Logo" />

          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
            <li>
              <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
                <Link href="/shop" >Shop</Link>
              </div>
            </li>
            <li>
              <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
                <Link href="/courses" className="mr-4 hover:underline md:mr-6 ">Courses</Link>
              </div>
            </li>
            <li>
              <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
                <Link href="/blog" className="mr-4 hover:underline md:mr-6 ">Blog</Link>
              </div>
            </li>
            <li>
              <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
                <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">Contact Us</Link>
              </div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm font-ibm text-white sm:text-center dark:text-gray-400">© 3 <a href="#" className="hover:underline">WorkFlow™</a>. All Rights Reserved.
        </span>
      </footer>


    </>

  )
}
