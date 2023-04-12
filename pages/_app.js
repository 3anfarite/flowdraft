import '../styles/globals.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {

  const router = useRouter()



  return (
    <ShopProvider>
        <Layout>
        <Script async src="https://cdn.splitbee.io/sb.js" ></Script>

          <Component {...pageProps} key={router.asPath} />
        </Layout>
    </ShopProvider>

  )
}

export default MyApp
