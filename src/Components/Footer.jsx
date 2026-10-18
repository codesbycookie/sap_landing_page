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
  const branches = [
    {
      name: "Poompokar Nagar",
      address: "Poompokar Nagar, Chennai",
      mapUrl: "https://maps.app.goo.gl/ttVCvtbuPucqWuuk6?g_st=ic",
    },
    {
      name: "Teacher's Colony",
      address: "Teacher's Colony, Chennai",
      mapUrl: "https://maps.app.goo.gl/4DixQhDMeii23Lni8?g_st=ic",
    },
    {
      name: "Mogappair East",
      address: "Mogappair East, Chennai",
      mapUrl: "https://maps.app.goo.gl/wYd8s9fBGDv3tH9SA?g_st=ic",
    },
  ];

  return (
    <footer className="bg-[#e2f5d0] text-black">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif">
          <img src="/logo.png" alt="Sampath Academy" width={100} height={100} />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:underline hover:text-black font-bold">
            Home
          </Link>
          <Link to="/about" className="hover:underline hover:text-black font-bold">
            About
          </Link>
          <Link to="/courses" className="hover:underline hover:text-black font-bold">
            Courses
          </Link>
          <Link to="/career" className="hover:underline hover:text-black font-bold">
            Career
          </Link>
          <Link to="/contact" className="hover:underline hover:text-black font-bold">
            Contact Us
          </Link>
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

      {/* Branches Section */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <h3 className="text-center text-sm font-bold mb-4 uppercase tracking-wide">
          Our Branches
        </h3>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {branches.map((branch) => (
            <a
              key={branch.name}
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-black text-gray-800 transition-colors"
              title={branch.address}
            >
              {branch.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="border-gray-300" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
        <p className="mb-2 md:mb-0">
          © 2026 Sampath Academy. All rights reserved.
        </p>
        <div className="flex flex-wrap space-x-6">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;