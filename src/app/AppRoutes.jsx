import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Gallery from '../pages/Gallery/Gallery'
import Courses from '../pages/Courses/Courses'
import Blogs from '../pages/Blogs/Blogs'

export default function AppRoutes() {
  return (
    <>
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
