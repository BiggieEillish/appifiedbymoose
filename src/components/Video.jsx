import React from 'react';
import video from '../images/video-image.jpg';
import Play from '../images/play-button.png';

const Video = () => {
  return (
    <section className="video-area py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Video Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="video-photo relative">
              <img src={video} alt="Video Thumbnail" className="w-full h-auto rounded-lg" />
              <a
                href="https://www.youtube.com/watch?v=ScrDhTsX0EQ"
                className="absolute inset-0 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Play} alt="Play Button" className="w-16 h-16" />
              </a>
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full md:w-5/12 md:ml-auto">
            <h5 className="text-xl font-semibold mb-2 animate-fadeInUp">VIDEO FEATURES</h5>
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
      </div>
    </section>
  );
};

export default Video;
