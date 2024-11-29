import React, { useState } from 'react'
import { Swiper , SwiperSlide } from 'swiper/react';
import panda from "../../assets/panda.png"
import avengers from "../../assets/avangers.png"
import gxk from "../../assets/gxk.png"
import tetris from "../../assets/tetris.png"
import play from "../../assets/play.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Carousel.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Carousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <div className='max-w-[1390px] mx-auto px-4 w-full'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#f00',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className='rounded-lg'>
          <div className='relative w-full h-full'>
            <img src={panda}/>
            <div className='w-full h-full absolute z-50 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white gra felx'>
              <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4'>
                <h2>Kung Fu Panda 4</h2>
                <p>2024 • Комедия • 1ч 34м • EN • 6+</p>
                <button className='flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold'>
                  <img src={play} alt="" />
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <div className='relative w-full h-full'>
            <img src={avengers} className='max-h-[640px] rounded-lg'/>
            <div className='w-full h-full absolute z-50 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white gra felx'>
              <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4'>
                <h2>Avengers</h2>
                <p>2019 • Фантастический • 2ч 9м • EN • 12+</p>
                <button className='flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold'>
                  <img src={play} alt="" />
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <div className='relative w-full h-full'>
            <img src={gxk} className='max-h-[640px] rounded-lg'/>
            <div className='w-full h-full absolute z-50 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white gra felx'>
              <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4'>
                <h2>Годзилла против Конга</h2>
                <p>2021 • Фантастический • 1ч 49м • EN • 12+</p>
                <button className='flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold'>
                  <img src={play} alt="" />
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <div className='relative w-full h-full'>
            <img src={tetris} className='max-h-[640px] rounded-lg'/>
            <div className='w-full h-full absolute z-50 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white gra felx'>
              <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4'>
                <h2>Тетрис</h2>
                <p>2023 • Биографический триллер • 1ч 58м • EN • 12+</p>
                <button className='flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold'>
                  <img src={play} alt="" />
                  Смотреть
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-lg'>
          <img src={panda} />
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <img src={avengers} className='max-h-[156px] rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <img src={gxk} className='max-h-[156px] rounded-lg'/>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg'>
          <img src={tetris} className='max-h-[156px] rounded-lg'/>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Carousel