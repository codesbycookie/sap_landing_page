import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import { CoursesPageData } from '../../utils/data'


export default function Courses() {
  const {section1, section2} = CoursesPageData;
  return (
    <div>
      <Section1 content={section1} />
      <Section2 content={section2} />
    </div>
  )
}
