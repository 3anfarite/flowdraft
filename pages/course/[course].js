import ProductPageContent from "../../components/ProductPageContent"
import { getAllProducts, getProduct } from "../../lib/shopify"
import { useEffect } from 'react';

export default function CoursePage({ course }) {

  useEffect(() => {
    console.log(course)
  }, [])
  
  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <CoursePageContent course={course} />
    </div>
  )
}


export async function getStaticProps({params}) {
  const data = await import("../../assets/data/courseDetails.json");
  const courses = data.courses;
  console.log(courses)
  const course = courses.find((item) => item.id === params.course);
  return {
    props: course ,
  };
}

export async function getStaticPaths() {
  const data = await import("../../assets/data/courseDetails.json");
  const courses = data.courses;

  const paths = courses.map(item => {

    return {
      params: { course: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}