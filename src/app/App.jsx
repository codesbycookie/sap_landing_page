import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Courses from '../pages/Courses'
import Blogs from '../pages/Blogs'
import Navbar from '../Components/Navbar'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  )
}

export default App
