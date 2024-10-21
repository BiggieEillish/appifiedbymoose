import React from 'react';
import WOW from 'wowjs'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Corrected Swiper import for version 7 and above
import 'swiper/css';  // Import Swiper core styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import mobileScreen from '../images/mobile-screen.png'; // Import the mobile screen background image

class Gallery extends React.Component {
  componentDidMount() {
    // Initialize WOW.js for animations
    new WOW.WOW().init();
  }

  render() {
    return (
      <section className="gallery-area py-16" id="gallery_page">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            
            {/* Screenshot Section with Mobile Phone Background */}
            <div className="w-full sm:w-3/4 lg:w-2/3 relative">
              {/* Mobile phone background */}
              <div className="relative" style={{ 
                backgroundImage: `url(${mobileScreen})`, 
                backgroundSize: 'contain', 
                backgroundPosition: 'center', 
                width: '350px',  // Increase the width for larger image display
                height: '700px',  // Adjust the height accordingly
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
                <Swiper
                  modules={[Navigation, Pagination]} // Add navigation and pagination
                  spaceBetween={10}
                  slidesPerView={1}  // Display a bit more of 1.5 images for visual balance
                  centeredSlides={true} // Center the slides
                  loop
                  navigation // Enable next/prev buttons
                  pagination={{ clickable: true }} // Enable pagination dots
                  style={{ width: '85%', height: '85%' }}  // Adjust to fit inside the mobile screen
                >
                  {[gallery1, gallery2, gallery3, gallery4].map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"  // Adjust to ensure the image fills the space appropriately
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Screenshot Details Section */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mt-8 sm:mt-0 px-4">
              <div className="page-title">
              <h5 class="white-color title wow fadeInUp" data-wow-delay="0.2s">Screenshots</h5>
                        <div class="space-10"></div>
                        <h3 class="white-color wow fadeInUp" data-wow-delay="0.4s">Screenshot 01</h3>
              </div>

              <div className="my-5"></div>

              <div className="desc wow fadeInUp" data-wow-delay="0.6s">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et
                  laborused.
                </p>
              </div>

              <div className="my-12 space-50">

              <a href="#" class="bttn-default wow fadeInUp" data-wow-delay="0.8s">Learn More</a>
            </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
