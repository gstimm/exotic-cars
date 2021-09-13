import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import { Container } from './styles';

SwiperCore.use([Pagination, Navigation]);

export default function Slider() {
  const [selectedCar, setSelectedCar] = useState(1);

  console.log(selectedCar);

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={30}
        height={241}
        initialSlide={selectedCar}
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        slideToClickedSlide
        className='swiper'
        slideActiveClass='swiper-slide-active'
        autoHeight
        centeredSlides
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide className='slide' />
        <SwiperSlide className='slide' />
        <SwiperSlide className='slide' />
      </Swiper>
    </Container>
  );
}
