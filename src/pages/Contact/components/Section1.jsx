import React from 'react'
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandX, 
  IconBrandYoutube,
  IconMapPin,
  IconExternalLink
} from "@tabler/icons-react";

export default function Section1() {
  const branches = [
    {
      name: "Poompokar Nagar",
      address: "Poompokar Nagar, Chennai",
      mapUrl: "https://maps.app.goo.gl/ttVCvtbuPucqWuuk6?g_st=ic"
    },
    {
      name: "Teacher's Colony",
      address: "Teacher's Colony, Chennai",
      mapUrl: "https://maps.app.goo.gl/4DixQhDMeii23Lni8?g_st=ic"
    },
    {
      name: "Mogappair East",
      address: "Mogappair East, Chennai",
      mapUrl: "https://maps.app.goo.gl/wYd8s9fBGDv3tH9SA?g_st=ic"
    }
  ];

  return (
    <div className='min-h-[90vh] bg-gradient-to-br from-white to-green-50 flex items-center justify-center px-6 mb-3'>
      <div className="max-w-7xl w-full mt-5 p-8 md:p-12 rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        
        {/* Left side - Contact Info + Branches */}
        <div className="flex flex-col gap-8">
          
          {/* Header */}
          <div>
            <p className='text-gray-500 text-lg mb-2'>Join the Journey</p>
            <h3 className="font-bold text-3xl text-[#8dc540] mb-3">Contact Us</h3>
            <p className='text-gray-500 text-base leading-relaxed'>
              We’re here to help with any questions or feedback about us!
            </p>
          </div>

          {/* Branch Locations */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
              <IconMapPin size={20} className="text-[#8dc540]" />
              Our Branches
            </h4>

            <div className="space-y-3">
              {branches.map((branch, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 hover:bg-green-50 border border-gray-100 rounded-xl p-3.5 transition-all duration-300 group"
                >
                  <p className="font-semibold text-gray-800 text-[15px] mb-0.5">
                    {branch.name}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {branch.address}
                  </p>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8dc540] hover:text-green-700 transition-colors"
                  >
                    View on Map
                    <IconExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-auto pt-2">
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

        {/* Right side - Form */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8dc540]">
              Contact Us
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              Share your thoughts with Sampath Academy
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Jason Dawson"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Mobile No.</label>
            <input
              type="text"
              placeholder="1234567890"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 p-3 outline-none bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Thought */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">Your Thought</label>
            <textarea
              rows={4}
              placeholder="Share your thoughts here..."
              className="w-full shadow-md rounded-lg focus:border-green-500 transition-colors duration-300 p-3 outline-none bg-gray-50 focus:bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#8dc540] text-white font-semibold py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}