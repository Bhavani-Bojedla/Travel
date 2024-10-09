import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/Images/image-1.jpeg';
import slide_image_2 from '../../assets/Images/image-2.jpeg';
import slide_image_3 from '../../assets/Images/image-3.jpeg';
import slide_image_4 from '../../assets/Images/image-4.jpeg';
import slide_image_5 from '../../assets/Images/image-5.jpeg';
import slide_image_6 from '../../assets/Images/image-6.jpeg';
import slide_image_7 from '../../assets/Images/image-7.jpeg';

export default function Destinations() {
  return (
    <div className="relative w-full mx-auto py-36 bg-sky-50">
      <h1 className="mb-12 text-3xl font-bold text-center">Popular Destination</h1>
      <div className="max-w-screen-lg mx-auto">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: -9,
            depth: 100,
            modifier: 2,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper-container"
        >
          {[
            slide_image_1,
            slide_image_2,
            slide_image_3,
            slide_image_4,
            slide_image_5,
            slide_image_6,
            slide_image_7,
          ].map((image, index) => (
            <SwiperSlide key={index} className="w-60 h-80">
              <img
                src={image}
                alt={`slide_image_${index}`}
                className="object-cover rounded-md w-60 h-80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className='w-8 h-12 mt-5 text-white rounded-md swiper-button-next right-60 bg-sky-500'></div>
        <div className='w-8 h-12 mt-5 text-white rounded-md left-60 swiper-button-prev bg-sky-500 '></div>
       
      </div>
    </div>
  );
}
