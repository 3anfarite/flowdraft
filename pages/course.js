import { useRouter } from "next/router";
import CoursePageContent from './../components/CoursePageContent';
import { useEffect } from 'react';
import { PageWrapper } from './page-wrapper';


const course = ({courses}) => {

   const router = useRouter();
   const courseId = Object.keys(router.query)[0]*1
   const course =  courses[courseId-1]
 
   return (
      <PageWrapper>
      <div className="min-h-screen py-12 sm:pt-20">
         <CoursePageContent courses={courses} course={course} />
      </div>
      </PageWrapper>
   )
}

export default course

export async function getStaticProps() {
   const data = await import("../assets/data/courseDetails.json");
   const courses = data.courses;

   return {
     props: {
       courses,
     },
   };
 }