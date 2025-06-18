import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "../styles/Slider.css"
import 'swiper/css';

import logo_2 from "../assets/swiper-logos/logo_2.png"
import logo_3 from "../assets/swiper-logos/logo_3.png"
import logo_4 from "../assets/swiper-logos/logo_4.png"
import logo_5 from "../assets/swiper-logos/logo_5.png"
import logo_6 from "../assets/swiper-logos/logo_6.png"
import logo_7 from "../assets/swiper-logos/logo_7.png"
import logo_8 from "../assets/swiper-logos/logo_8.png"

const Slider = () => {
    return (
        <div className="brand-slider">
            <Swiper
                spaceBetween={20}
                slidesPerView={2}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                observer={true}
                observeParents={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_6} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_7} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-imgs'>
                        <img src={logo_8} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;