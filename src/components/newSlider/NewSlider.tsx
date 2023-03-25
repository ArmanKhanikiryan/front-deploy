import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewSlider.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import facade1 from '../../assets/images/facade1.webp'
import facade2 from '../../assets/images/facade2.webp'
import facade3 from '../../assets/images/facade3.webp'
import facade4 from '../../assets/images/facade4.webp'

const imagesArray: string[] = [
    facade1,
    facade2,
    facade3,
    facade4
]
export default function NewSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {imagesArray.map(elem => {
                    return <SwiperSlide><img src={elem} className='slider-image' alt="slider-image"/></SwiperSlide>
                })}
            </Swiper>
        </>
    );
}