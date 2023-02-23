import Hero from '../components/Hero'
import Head from 'next/head'
import CoursesSection from '../components/CoursesSection';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonials';

export default function Home({ products }) {

 
  return (
   <div className="">
      <Head>
        <title>Modern eCommerce</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name='description' content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'/>
        <meta property="og:title" content="Modern eCommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta property="og:description" 
        content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce" />
        
      </Head>
      <Hero/>
      
      <CoursesSection/>
      <Testimonials/>
      <CourseList/>
      
   </div>
  )
}

export async function getStaticProps(context){
  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  const data = await res.json();
  return {
      props: { products: data }
    }
}
