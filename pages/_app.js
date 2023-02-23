import '../styles/globals.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NLModal from './../components/NLModal';
import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const showModal = () => {
    setIsOpen(true);
    console.log('isOpen')
  }

  const handleClose = () => {
    setIsOpen(false);
  }


  return (
    <ShopProvider>
      <Layout>
      
        {/* <button onClick={showModal} class=" text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Show modal
        </button> */}
        <NLModal onClose={handleClose} visible={isOpen} />

        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>

  )
}

export default MyApp
