import React from 'react';
import feature from '../images/feature-image.png';
import { RocketLaunchIcon, PaperClipIcon, CloudArrowDownIcon, ClockIcon, DevicePhoneMobileIcon, CogIcon } from '@heroicons/react/24/outline'; 

const Feature = () => {
  return (
    <section className="feature-area section-padding-top" id="features_page">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="page-title text-center">
              <h5 className="title">Features</h5>
              <div className="space-10"></div>
              <h3>Powerful Features As Always</h3>
              <div className="space-60"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap">
          {/* Left Column Features */}
          <div className="w-full md:w-1/3 mb-8">
            <div className="service-box text-center mb-20">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <RocketLaunchIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fast & Powerful</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="service-box text-center mb-20">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <PaperClipIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Easily Editable</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="service-box text-center mb-8">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <CloudArrowDownIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Cloud Storage</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="w-full md:w-1/3 mb-8 hidden md:block">
            <figure className="mobile-image">
              <img src={feature} alt="Feature Photo" className="w-full h-auto rounded-lg" />
            </figure>
          </div>

          {/* Right Column Features */}
          <div className="w-full md:w-1/3 mb-8">
            <div className="service-box text-center mb-20">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <ClockIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Easy Notifications</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="service-box text-center mb-20">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <DevicePhoneMobileIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fully Responsive</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="service-box text-center mb-8">
              <div className="box-icon flex justify-center items-center text-4xl mb-4 text-blue-600">
                <CogIcon className="h-12 w-12" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Editable Layout</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
