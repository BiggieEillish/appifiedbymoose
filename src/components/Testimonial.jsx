import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module for Swiper
import 'swiper/css'; // Import Swiper core CSS
import 'swiper/css/navigation'; // Import Swiper navigation buttons
import team1 from '../images/team-1.png';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      image: team1,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
    {
      image: team2,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
    {
      image: team3,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
    {
      image: team1,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
    {
      image: team2,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
    {
      image: team3,
      name: 'Ashekur Rahman',
      position: 'Art Director',
      feedback: 'Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo.',
    },
  ];

  return (
    <section className="testimonial-area py-20 bg-gray-100" id="testimonial_page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-xl font-semibold mb-2">Testimonials</h5>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Client Loves Us</h3>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Show 3 testimonials at a time
            navigation // Enable navigation buttons
            loop // Loop the slider
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="team-box bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="team-image mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
                  <h6 className="text-sm text-gray-500 mb-3">{testimonial.position}</h6>
                  <p className="text-gray-600">{testimonial.feedback}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
