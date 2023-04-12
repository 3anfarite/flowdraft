import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Head from 'next/head'
import CoursesSection from '../components/CoursesSection';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonials';
import NLModal from './../components/NLModal';
import CalendlyComponent from '../components/CalendlyComponent';
import TrustUs from '../components/TrustUs';
import { PageWrapper } from '../utils/page-wrapper';


export default function Home({ courses, hero, courseInfo }) {

  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


  const handleClose = () => {
    setIsOpen(false);
  }


  return (
    <div className="">
      <Head>
        <title>AWF</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name='description' content='' />
        <meta property="og:title" content="WorkFlow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <meta property="og:description"
          content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="WorkFlow" />
      </Head>
      <PageWrapper>
        <Hero hero={hero} />
        <NLModal onClose={handleClose} visible={isOpen} />

        <CoursesSection courseInfo={courseInfo} />
        <Testimonials />
        <div id="discover-more">
          <CourseList courses={courses} />
        </div>
        <TrustUs />
        <CalendlyComponent />
      </PageWrapper>
    </div>
  )
}

export async function getStaticProps() {
  const data = await import("../assets/data/courseDetails.json");
  const courses = data.courses;

  const results = await import("../assets/data/HeroSection.json");
  const hero = results.hero;

  const infos = await import("../assets/data/CourseSection.json");
  const courseInfo = infos.courseInfo;

  return {
    props: {
      courses, hero, courseInfo
    },
  };
}