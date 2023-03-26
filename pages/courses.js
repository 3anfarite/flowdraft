import React from 'react'
import { PageWrapper } from '../utils/page-wrapper';
import CoursePage from '../components/CoursePage'

const courses = ({ courses }) => {

  return (
    <PageWrapper>
      <CoursePage courses={courses} />
    </PageWrapper>
  )
}

export default courses

export async function getStaticProps() {
  const data = await import("../assets/data/courseDetails.json");
  const courses = data.courses;

  return {
    props: {
      courses,
    },
  };
}