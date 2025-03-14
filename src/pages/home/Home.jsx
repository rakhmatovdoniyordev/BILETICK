import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../../components/Swiper/Carousel';
import Week from '../../components/Week/Week';
import { auth } from '../../firebase';
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);

  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);


    if (user && user.accessToken !== localStorage.getItem("token")) {
      dispatch(logout());
      navigate("/auth");
    }
  }, [dispatch, navigate]);

  document.title = "BILETICK";

  return (
    <section className={`${Mode ? "bg-white-person" : "bg-black"}`}>
      <Carousel />
      <Week />
    </section>
  );
}

export default React.memo(Home);
