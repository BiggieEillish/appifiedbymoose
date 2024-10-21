import React from 'react';
import Google from '../images/play-store-icon.png';
import Apple from '../images/apple-icon.png';
import download from '../images/download-image.png';

const Download = () => {
  return (
    <div className="download-area overlay py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          {/* Mobile image on the left */}
          <div className="w-full sm:w-1/2 hidden sm:block">
            <figure className="mobile-image">
              <img
                src={download}
                alt="Download"
                className="w-3/4 h-auto"
              />
            </figure>
          </div>

          {/* Description on the right */}
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-0">
            <h3 className="text-white text-3xl font-bold text-center sm:text-left">Download The App</h3>
            <div className="my-5"></div>
            <p className="text-white mb-8 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam eum praesentium unde.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded flex items-center space-x-2"
              >
                <img
                  src={Apple}
                  alt="apple icon"
                  className="w-6 h-6"
                />
                <span>Apple Store</span>
              </a>
              <a
                href="#"
                className="bg-white text-black px-4 py-2 rounded flex items-center space-x-2"
              >
                <img
                  src={Google}
                  alt="Play Store Icon"
                  className="w-6 h-6"
                />
                <span>Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
