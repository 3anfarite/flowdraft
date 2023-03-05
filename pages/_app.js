import '../styles/globals.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import { ChakraProvider } from "@chakra-ui/react";
import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  const router = useRouter()



  return (
    <ShopProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ChakraProvider>
    </ShopProvider>

  )
}

export default MyApp
