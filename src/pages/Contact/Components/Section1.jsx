import React from 'react'
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";

export default function Section1() {
  return (
    <div className='min-h-[90vh] bg-gradient-to-br from-white to-green-50 flex items-center justify-center px-6 mb-3'>
      <div className="max-w-7xl w-full mt-5 p-8 md:p-12 rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-16">
        {/* Left side - Contact Info */}
         <div className="flex flex-col justify-between">
          <div className="space-y-8">
            {/* Location */}
            <div>
              <p className='text-gray-500 text-lg mb-3'>Join the Journey</p>
              <h3 className="font-bold text-3xl text-[#8dc540] mb-3">Contact Us</h3>
              <p className='text-gray-500 text-lg'>We’re here to help with any questions or feedback about us !!</p>
            </div>
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
        <img src="/Contact-Us.svg" alt="" className='hidden md:block'/>
        </div>
        {/* Right side - form*/}
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8dc540]">
              Contact Us
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Share Your thoughts with Sampath Academy
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
          {/* Email */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Email.</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Your Thought</label>
            <textarea
              type="text"
              placeholder="Share your thoughts here..."
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 rounded-t-md p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#8dc540] text-white font-semibold py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
