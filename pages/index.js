import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Head from 'next/head'
import CoursesSection from '../components/CoursesSection';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonials';
import NLModal from './../components/NLModal';
import CalendlyComponent from '../components/CalendlyComponent';


export default function Home({ courses, hero }) {

  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  const handleClose = () => {
    setIsOpen(false);
  }


  return (
    <div className="">
      <Head>
        <title>Modern eCommerce</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name='description' content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.' />
        <meta property="og:title" content="Modern eCommerce" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta property="og:description"
          content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce" />

      </Head>
      <Hero hero={hero} />
      <NLModal onClose={handleClose} visible={isOpen} />

      <CoursesSection />
      <Testimonials />
      <div id="discover-more">
        <CourseList courses={courses} />
      </div>

      <CalendlyComponent />
    </div>
  )
}

export async function getStaticProps() {
  const data = await import("../assets/data/courseData.json");
  const courses = data.courses;

  const results = await import("../assets/data/HeroSection.json");
  const hero = results.default;

  return {
    props: {
      courses,hero
    },
  };
}