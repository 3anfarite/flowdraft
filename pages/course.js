import CoursePageContent from './../components/CoursePageContent';
import { PageWrapper } from './page-wrapper';


const course = ({courses}) => {

   return (
      <PageWrapper>
      <div className="min-h-screen py-12 sm:pt-20">
         <CoursePageContent courses={courses} />
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