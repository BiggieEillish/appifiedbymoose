import React from 'react';
import progressphone from '../images/progress-phone.png';


const Progress = () => {
  return (
    <section className="progress-area gray-bg py-19" id="progress_page">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="page-title">
              <h5 className="text-xl font-semibold mb-2 animate-fadeInUp">Our Progress</h5>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fadeInUp">
                Great Application Ever
              </h3>
              <p className="text-gray-600 mb-6 animate-fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 animate-fadeInUp"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <figure className="mobile-image">
              <img
                src={progressphone}
                alt="Progress"
                className="w-full h-auto animate-fadeInUp"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;
