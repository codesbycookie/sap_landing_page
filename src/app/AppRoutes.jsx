import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Courses from "../pages/Courses/Courses";
import Blogs from "../pages/Blogs/Blogs";
import Careers from "../pages/Careers/Careers";
import Error from "../pages/Error404/Error";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BuildingExperience from "../pages/BuildingExperience/BuildingExperience";

const Layout = ({ children }) => {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
};

const NavbarFooterWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <NavbarFooterWrapper>
              <Home />
            </NavbarFooterWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <NavbarFooterWrapper>
              <About />
            </NavbarFooterWrapper>
          }
        />
        <Route
          path="/courses"
          element={
            <NavbarFooterWrapper>
              <Courses />
            </NavbarFooterWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <NavbarFooterWrapper>
              <Contact />
            </NavbarFooterWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <NavbarFooterWrapper>
              <Gallery />
            </NavbarFooterWrapper>
          }
        />
        <Route path="/blogs" element={
<BuildingExperience/>
            } /> 
        <Route
          path="/careers"
          element={
            <NavbarFooterWrapper>
              <Careers />
            </NavbarFooterWrapper>
          }
        />
        <Route
          path="/login"
          element={
              <BuildingExperience />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}
