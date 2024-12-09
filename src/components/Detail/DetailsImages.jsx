import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './DetailsImage.css';
import { EffectFade, Navigation } from 'swiper/modules';

const DetailsImages = ({data}) => {
   const img =  data?.backdrops?.slice(0, 25)
  return (
    <>
      <Swiper
      style={{
        "--swiper-navigation-color": "#f00",
        "--swiper-pagination-color": "#fff",
        "--swiper-button-background": "#000"
      }}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className={`mySwiper3 select-none`}
      >
        {
            img?.map((image, inx)=> (
                <SwiperSlide key={inx}>
                <img src={import.meta.env.VITE_IMAGE_URL + image?.file_path} className={`${data?.backdrops.length === 0 ? "h-0" : "h-auto"}`}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  )
}

export default DetailsImages