import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import { AboutPageData } from "../../data/data";
export default function About() {
  const {section1, section2, section3, section4, section5} = AboutPageData;
  return (
    <div>
      <Section1 content={section1} />
      <Section2 content={section2} />
      <Section3 content={section3} />
      <Section4 content={section4} />
      <Section5 content={section5} />
    </div>
  )
}
