import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IconChevronCompactDown, IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about", hasDropdown: true }, // Dropdown parent
    { name: "Careers", to: "/careers" },
    { name: "Blog", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  // Dropdown items for About
  const aboutDropdown = [
    { name: "Life at SAP", to: "/gallery" },
    { name: "Courses", to: "/courses" },
  ];

  return (
    <nav
      className={`z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"

              className="text-xl font-bold bg-gradient-to-r from-[#8dc540] to-[#7cbf3a] bg-clip-text text-transparent"
            >
              <img src="/logo.png" alt="" width={100} height={100} />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                  >
                    <NavLink
  key={item.name}
  to={item.to}
  className={({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
      isActive
        ? "text-green-600 font-semibold after:w-full"
        : "text-gray-600 hover:text-green-600"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-green-600 after:w-0 group-hover:after:w-full after:transition-all after:duration-300`
  }
>
  {item.name}
</NavLink>



                    {/* Dropdown */}
                    <div className="z-1000 absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                      <div className="py-2">
                        {aboutDropdown.map((item) => (
                          <NavLink
                      to={item.to}
                      onClick={handleLinkClick}
                      className="text-gray-600 font-medium block px-3 py-2 text-base hover:text-green-600 transition"
                    >
                      {item.name}
                    </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                )
              )}
              

            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <NavLink
              to="/login"
              className="ml-8 px-4 py-2 rounded-md bg-[#8dc540] text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none focus:text-green-600 p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IconX size={24} className="text-current" />
              ) : (
                <IconMenu2 size={24} className="text-current" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <NavLink
                      to={item.to}
                      onClick={handleLinkClick}
                      className="text-gray-600 font-medium block px-3 py-2 text-base hover:text-green-600 transition"
                    >
                      {item.name}
                    </NavLink>
                    <div className="ml-4">
                      {aboutDropdown.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.to}
                          onClick={handleLinkClick}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={handleLinkClick}
                    className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-200 border-l-4 border-transparent hover:border-green-500 hover:bg-green-50 rounded"
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-4">
              <NavLink
                to="/login"
                onClick={handleLinkClick}
                className="block w-full text-center px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;