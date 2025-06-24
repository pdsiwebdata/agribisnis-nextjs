'use client'; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import classes from './GalleryCarousel.module.css'; // module CSS

const imageCount = 10;

export default function GalleryCarousel() {
  return (
    <div >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { spaceBetween: 30 },
          1024: { slidesPerView: 4 },
        }}
        className={classes['image-carousel']}
      >
        {[...Array(imageCount)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`/images/carousel/${i + 1}.jpg`}
              alt={`Gambar ${i + 1}`}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
// This code defines a React component named GalleryCarousel that renders a carousel of images using Swiper.js.
// It imports necessary modules from Swiper, styles, and uses a loop to generate slides based on the number of images.