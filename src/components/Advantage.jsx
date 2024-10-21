import React from 'react';
import WOW from 'wowjs';
import 'animate.css';
import { BellIcon, DevicePhoneMobileIcon, CogIcon } from '@heroicons/react/24/outline';

class Advantage extends React.Component {
  componentDidMount() {
    // Initialize WOW.js for animations
    this.wow = new WOW.WOW({
      live: false, // Disable live updates for better performance
    });
    this.wow.init();
  }

  componentWillUnmount() {
    // Clean up WOW.js instance when the component is unmounted
    this.wow.sync();
  }

  render() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
              <div className="page-title">
                <h5 className="text-gray-800 text-lg font-semibold mb-2 wow fadeInUp" data-wow-delay="0.2s">
                  Our Features
                </h5>
                <div className="h-2"></div>
                <h3 className="text-gray-900 text-2xl sm:text-3xl font-bold wow fadeInUp" data-wow-delay="0.4s">
                  Our Approach to Design is Pretty Simple and Clear
                </h3>
              </div>
              <div className="my-5"></div>
              <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="my-12"></div>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 wow fadeInUp"
                data-wow-delay="0.8s"
              >
                Learn More
              </a>
            </div>
            <div className="w-full sm:w-1/2 md:w-5/12 md:ml-auto">
              <div className="mt-8 md:mt-0">
                {[
                  {
                    icon: BellIcon,
                    title: 'Easy Notifications',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
                  },
                  {
                    icon: DevicePhoneMobileIcon,
                    title: 'Fully Responsive',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
                  },
                  {
                    icon: CogIcon,
                    title: 'Editable Layout',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.',
                  },
                ].map((service, index) => (
                  <div className="service-box wow fadeInUp mb-12" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
                    <div className="box-icon flex justify-center items-center text-blue-500 text-4xl mb-4">
                      <service.icon className="h-12 w-12" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Advantage;
