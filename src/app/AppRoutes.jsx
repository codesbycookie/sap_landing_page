import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About'; // Standardized to match other imports
import Contact from '../pages/Contact/Contact';
import Gallery from '../pages/Gallery/Gallery';
import Courses from '../pages/Courses/Courses';
import Blogs from '../pages/Blogs/Blogs';
import Careers from '../pages/Careers/Careers';

// Optional: Basic Layout Component
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Layout>
  );
}