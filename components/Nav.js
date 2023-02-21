import Image from 'next/image'
import { useContext, useState } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import logo from '../assets/workflowLogo.png'
import dynamic from 'next/dynamic'
import Link from 'next/link';

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  const [open, setOpen] = useState(false)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })

  return (
    <header className="bg-cgrey px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0  dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" passHref>
          <a className="flex items-center">
            <Image src={logo} width={75} height={30} />
          </a>
        </Link>
        <div className='flex md:order-2' >

          <Link href='/login' >
            <button type="button" className="text-cgrey bg-black hover:bg-blue-800  focus:ring-blue-300 font-semibold font-ibm text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-gray">Join Us</button>
          </Link>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setOpen(!open)} >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <button
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black "
            onClick={() => setCartOpen(!cartOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red border-2 border-red rounded-full -top-0 -right-0">{cartQuantity}</div>
          </button>
          <MiniCart cart={cart} />
        </div>

        <div className={`items-center justify-between ${open ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-cgrey dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/shop" passHref>
                <a className="block py-2 pl-3 pr-4 text-black rounded  md:text-black md:p-0">Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/courses" passHref>
                <a className="block py-2 pl-3 pr-4 text-black rounded  md:text-black md:p-0">Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <a className="block py-2 pl-3 pr-4 text-black rounded  md:text-black md:p-0">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="block py-2 pl-3 mr-4 text-black rounded  md:text-black md:p-0">Contact</a>
              </Link>
            </li>

          </ul>
        </div>
      </div>

    </header>


  )
}

export default dynamic(() => Promise.resolve(Nav), {
  ssr: false
})