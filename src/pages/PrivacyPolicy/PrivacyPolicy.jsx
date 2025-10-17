import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FAE7] to-[#E2F5D0] py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 urbanist-700">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 urbanist-400">
          Last updated: September 22, 2025
        </p>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed urbanist-400 text-lg">
              Sampath Academy is committed to protecting your privacy. This policy explains how we collect, 
              use, and safeguard your personal information when you visit our website or interact with our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed urbanist-400 space-y-2 text-lg ml-4">
              <li>Personal details (name, email, phone number, address) submitted via forms</li>
              <li>Academic information (if provided for admissions or inquiries)</li>
              <li>Usage data (cookies, analytics, device information)</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed urbanist-400 space-y-2 text-lg ml-4">
              <li>To respond to your inquiries and provide requested services</li>
              <li>For admission, academic, and administrative communication</li>
              <li>To improve our website and offerings</li>
              <li>For marketing and updates (with your consent)</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              4. Data Sharing
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed urbanist-400 space-y-2 text-lg ml-4">
              <li>We do not sell your personal data</li>
              <li>Information may be shared with trusted partners (e.g., payment gateway, email service) only as needed</li>
              <li>We may disclose information to comply with legal obligations</li>
            </ul>
          </section>

          {/* Cookies & Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              5. Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed urbanist-400 text-lg">
              We use cookies and similar technologies to enhance your experience and analyze site usage. 
              You can disable cookies in your browser settings.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              6. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed urbanist-400 text-lg">
              We implement reasonable security measures to protect your data from unauthorized access, 
              alteration, or disclosure.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              7. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed urbanist-400 space-y-2 text-lg ml-4">
              <li>You may request access, correction, or deletion of your personal information</li>
              <li>Contact us for privacy-related requests or concerns</li>
            </ul>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              8. Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed urbanist-400 text-lg">
              We may update this policy from time to time. Changes will be posted on this page with the updated date.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 urbanist-700 flex items-center">
              <div className="w-3 h-3 bg-[#8dc540] rounded-full mr-3"></div>
              9. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed urbanist-400 text-lg mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-[#E2F5D0] rounded-xl p-6 border border-[#8dc540]/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-gray-900 font-semibold urbanist-600 text-lg">Email</p>
                  <a 
                    href="mailto:info@sampathacademy.in" 
                    className="text-[#8dc540] hover:text-[#7bb532] transition-colors duration-200 text-lg"
                  >
                    info@sampathacademy.in
                  </a>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold urbanist-600 text-lg">Phone</p>
                  <a 
                    href="tel:+919884794494" 
                    className="text-[#8dc540] hover:text-[#7bb532] transition-colors duration-200 text-lg"
                  >
                    +91 98847 94494
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 urbanist-400 text-sm">
              This Privacy Policy was last updated on September 22, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-[#8dc540] hover:bg-[#7bb532] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg urbanist-600 text-lg"
        >
          Contact Us for Privacy Concerns
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;