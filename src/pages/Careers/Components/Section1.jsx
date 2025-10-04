import React from 'react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";

export default function Section1() {
  return (
    <div className='min-[90vh] bg-gradient-to-br from-white to-green-50 flex items-center justify-center px-6 mb-3'>
      <div className="max-w-6xl w-full mt-5 p-8 md:p-12 rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Left side - Form */}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-[#8dc540] bg-clip-text text-transparent">
              Apply Now
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Fill out the application and start working with Sampath Academy
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Jason Dawson"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Mobile No.</label>
            <input
              type="text"
              placeholder="1234567890"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Select Job Field */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Select Job Field</label>
            <select
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md px-3 py-3 bg-gray-50 focus:bg-white text-gray-700 outline-none appearance-none"
            >
              <option value="Teaching">Teaching</option>
              <option value="Non-Teaching">Non-Teaching</option>
              <option value="Staffs">Staffs</option>
              <option value="Data Entry">Data Entry</option>
            </select>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Experience in Years</label>
            <input
              type="text"
              placeholder="Enter your years of experience"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>
          {/* Resume */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Upload Resume</label>
            <input
              type="file"
              placeholder="Enter your years of experience"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#8dc540] text-white font-semibold py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Submit Application
          </button>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-8">
            {/* Location */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Location</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8dc540] rounded-full mr-3"></span>
                  Kolathur
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8dc540] rounded-full mr-3"></span>
                  Poompuhar Nagar
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#8dc540] rounded-full mr-3"></span>
                  Teachers Colony
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Support</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-[#8dc540] rounded-full mr-3"></span>
                  hello@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-[#8dc540] rounded-full mr-3"></span>
                  +91 6232115122
                </p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 mt-8">
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300">
              <IconBrandX size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300">
              <IconBrandFacebook size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300">
              <IconBrandInstagram size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300">
              <IconBrandYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}