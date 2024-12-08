import React from 'react'
import { useSelector } from 'react-redux';
import Carousel from '../../components/Swiper/Carousel';
import Week from '../../components/Week/Week';

const Home = () => {
    const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
    document.title = "BILETICK"
  return (
    <section>
      <Carousel/>
      <Week/>
    </section>
  )
}

export default React.memo(Home)