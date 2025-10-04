import React from "react";
import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-[#e2f5d0] text-black mt-3">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold font-serif mb-4 md:mb-0">
          <img src="/logo.png" alt="" width={100} height={100} />
        </div>
        
        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm font-medium mb-4 md:mb-0">
          <Link to="/" className="hover:underline hover:text-black font-bold">Home</Link>
          <Link to="/about" className="hover:underline hover:text-black font-bold">About</Link>
          <Link to="/courses" className="hover:underline hover:text-black font-bold">Courses</Link>
          <Link to="/career" className="hover:underline hover:text-black font-bold">Career</Link>
          <Link to="/contact" className="hover:underline hover:text-black font-bold">Contact Us</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <IconBrandFacebook size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <IconBrandInstagram size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <IconBrandX size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <IconBrandLinkedin size={22} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <IconBrandYoutube size={22} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
        <p className="mb-2 md:mb-0">
          © 2024 Sampath Academy. All rights reserved.
        </p>
        <div className="flex flex-wrap space-x-6">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link to="/cookies-settings" className="hover:underline">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
