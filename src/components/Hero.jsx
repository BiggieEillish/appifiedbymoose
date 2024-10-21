import React from 'react';
import mobile from '../images/header-mobile.png'

const Hero = () => {
  return (
    <header className="home-area overlay bg-blue-500 text-white py-20" id="home_page">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full md:w-5/12 hidden sm:block">
            <figure className="mobile-image animate-fadeInUp">
              <img
                src={mobile}
                alt="Mobile"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
              />
            </figure>
          </div>
          {/* Text Section */}
          <div className="w-full md:w-7/12 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold animate-fadeInUp">Start your amazing stuff through appy.</h1>
            <div className="mt-4"></div>
            <p className="text-lg mt-4 animate-fadeInUp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4"></div>
            <a href="#" className="inline-block mt-6 px-6 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 animate-fadeInUp">
              <i className="lnr lnr-download"></i> Download App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
