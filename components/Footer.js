import Image from "next/image"
import logo from '../assets/lightworkflow.PNG'
import Link from 'next/link';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Terms and Conditions', href: '#' }
]

export default function Footer() {
  return (

    <footer className="p-4 bg-black shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-around">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image src={logo} width={75} height={30} alt="workflow Logo" />
          
        </Link>
        <ul className="flex flex-wrap items-center mb-6  text-sm text-white sm:mb-0 dark:text-gray-400">
          <li>
          <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
          </div>
          </li>
          <li>
            <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
              <Link href="/shop" >Shop</Link>
            </div>
          </li>
          <li>
          <div className="mr-4 hover:underline font-ibm px-10 md:mr-6">
            <Link href="/courses" className="mr-4 hover:underline md:mr-6 ">All courses</Link>
          </div>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm font-ibm text-white sm:text-center dark:text-gray-400">© 3 <a href="#" className="hover:underline">WorkFlow™</a>. All Rights Reserved.
      </span>
    </footer>

  )
}
