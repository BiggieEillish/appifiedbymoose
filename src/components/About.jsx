import React from 'react';
import about from '../images/about-logo.png';

const About = () => {
  return (
    <section className="section-padding" id="about_page">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 text-center">
            <img src={about} alt="About Logo" className="mx-auto mb-6" />
            <h5 className="text-xl font-semibold mb-4">About Appy</h5>
            <h3 className="text-2xl md:text-3xl text-blue-600 mb-6">
              A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
