'use client'; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import classes from './HeroCarousel.module.css'; // module CSS

const slides = [1, 2, 3, 4, 5];

export default function HeroCarousel() {
  return (
    <div className={classes['hero-slider']}>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: `.${classes['mitra-next']}`,
          prevEl: `.${classes['mitra-prev']}`,
        }}
        className={classes['hero-slider']}
      >
        {slides.map((id) => (
          <SwiperSlide key={id}>
            <div
              className={classes['swiper-slide']}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/carousel/${id}.jpg')`,
              }}
            >
              <div className={classes['hero-content']}>
                <h2>Program Studi Agribisnis</h2>
                <p>
                  Menyiapkan Profesional di Bidang Agribisnis yang Kompeten, Inovatif, dan Berwawasan Global
                  untuk Membangun Pertanian Indonesia yang Berkelanjutan
                </p>
                <div className={classes['cta-buttons']}>
                  <a href="https://pmb.satyaterrabhinneka.ac.id" className={classes['btn']}>
                    Daftar Sekarang
                  </a>
                  <a href="#tentang" className={`${classes['btn']} ${classes['btn-outline']}`}>
                    Informasi Selengkapnya
                  </a>
                  
                </div>
                
              </div>     
              <div className={`${classes['mitra-prev']} ${classes['swiper-button-prev']}`}>‹</div>
                <div className={`${classes['mitra-next']} ${classes['swiper-button-next']}`}>›</div>
                <div className={`${classes['swiper-pagination']}`}></div>   
            </div>
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
}
