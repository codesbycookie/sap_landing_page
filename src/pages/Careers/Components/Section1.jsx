import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconCircleCheck,
} from "@tabler/icons-react";

export default function Section1() {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x11bavf",   // replace with your EmailJS service ID
        "template_pq9sjug",  // replace with your EmailJS template ID
        form.current,
        "a72eaMCPF0pergdDz"  // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalMessage("Application submitted successfully!");
          setIsSuccess(true);
          setIsModalOpen(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setModalMessage("Failed to send application. Please try again.");
          setIsSuccess(false);
          setIsModalOpen(true);
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-white to-green-50 flex items-center justify-center px-6 mb-3 relative">
      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
            <div className="text-center space-y-4">
              {/* Icon */}
              <div className={`flex justify-center ${isSuccess ? 'text-[#8dc540]' : 'text-red-500'}`}>
                {isSuccess ? (
                  <IconCircleCheck size={64} className="animate-bounce" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold">!</span>
                  </div>
                )}
              </div>
              
              {/* Message */}
              <div className="space-y-2">
                <h3 className={`text-2xl font-bold ${isSuccess ? 'text-[#8dc540]' : 'text-red-600'}`}>
                  {isSuccess ? 'Success!' : 'Oops!'}
                </h3>
                <p className="text-gray-600 text-lg">
                  {modalMessage}
                </p>
              </div>
              
              {/* Button */}
              <button
                onClick={closeModal}
                className={`w-full mt-4 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  isSuccess 
                    ? 'bg-[#8dc540] hover:bg-green-600' 
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {isSuccess ? 'Continue' : 'Try Again'}
              </button>
            </div>
          </div>
        </div>
      )}

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

          {/* FORM START */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Jason Dawson"
                required
                className="w-full shadow-md rounded-lg p-3 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8dc540] transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="jason@example.com"
                required
                className="w-full shadow-md rounded-lg p-3 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8dc540] transition-all duration-300"
              />
            </div>

            {/* Mobile */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">
                Mobile No.
              </label>
              <input
                type="text"
                name="user_mobile"
                placeholder="1234567890"
                required
                className="w-full shadow-md rounded-lg p-3 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8dc540] transition-all duration-300"
              />
            </div>

            {/* Select Job Field */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">
                Select Job Field
              </label>
              <select
                name="job_field"
                required
                className="w-full shadow-md rounded-lg px-3 py-3 bg-gray-50 focus:bg-white text-gray-700 outline-none appearance-none focus:ring-2 focus:ring-[#8dc540] transition-all duration-300"
              >
                <option value="Teaching">Teaching</option>
                <option value="Non-Teaching">Non-Teaching</option>
                <option value="Staffs">Staffs</option>
                <option value="Data Entry">Data Entry</option>
              </select>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="block font-semibold text-gray-700">
                Experience in Years
              </label>
              <input
                type="text"
                name="user_experience"
                placeholder="Enter your years of experience"
                required
                className="w-full shadow-md rounded-lg p-3 outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#8dc540] transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8dc540] text-white font-semibold py-4 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </form>
          {/* FORM END */}
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
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300"
            >
              <IconBrandX size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300"
            >
              <IconBrandFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300"
            >
              <IconBrandInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:text-[#8dc540] transition-colors duration-300"
            >
              <IconBrandYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}