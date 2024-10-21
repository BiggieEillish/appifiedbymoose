import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="footer-area bg-white text-gray-900" id="contact_page">
      {/* Main Footer Section */}
      <div className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h5 className="text-lg font-semibold">Contact US</h5>
            <h3 className="text-2xl text-gray-500">Find Us By Below Details</h3>
            <div className="mt-6"></div>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Address */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-800 rounded-full">
                  <MapPinIcon className="h-8 w-8 text-white" />
                </div>
                <p className="mt-4">8-54 Paya Lebar Square <br /> 60 Paya Lebar Rd, SG, Singapore</p>
              </div>
            </div>
            {/* Phone */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-800 rounded-full">
                  <PhoneIcon className="h-8 w-8 text-white" />
                </div>
                <p className="mt-4">+65 93901336 <br /> +65 93901337</p>
              </div>
            </div>
            {/* Email */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-800 rounded-full">
                  <EnvelopeIcon className="h-8 w-8 text-white" />
                </div>
                <p className="mt-4">
                  <a href="#" className="underline">
                    madebymoose@real.com
                  </a> <br />
                  <a href="#" className="underline">
                    srs@fr.nc
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left text-sm">
            <span>
              &copy; {new Date().getFullYear()} All rights reserved | Made with <HeartIcon className="inline-block h-5 w-5 text-red-500" /> by 
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className="text-blue-400 underline"> Colorlib</a>
            </span>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Features</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400">Testimonial</a></li>
              <li><a href="#" className="hover:text-blue-400">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
