import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Language from "./Language"
import logo from "../../assets/LOGO.png"
import Navlinks from './Navlinks'
import { IoArrowUpCircle } from "react-icons/io5";
import { useSelector } from 'react-redux'


const Header = () => {
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [header, setHeader] = useState(false)
  window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop >= 200){
      setHeader(true)
    }else{
      setHeader(false)
    }
  })
  return (
    <>
        <header className={`duration-300 ${header ? `sticky top-0 z-40 ${Mode ? "bg-[#ffffffde]" : "bg-[#000c]"}` : ""} backdrop-blur-sm`}>
          <div className='container'>
            <nav className='flex justify-between items-center h-[90px] relative'>
              <div className='flex items-center'>
                <NavLink to={"/"}>
                  <img src={logo} alt="" className='max-w-[112px]'/>
                </NavLink>
              </div>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <Navlinks/>
              </div>
              <Language/>
            </nav>
          </div>
        </header>

        {
          header ?
          <div className='fixed bottom-16 right-[11%] z-[101] duration-300'>
              <a href="#">
                <IoArrowUpCircle className='text-[50px] text-red-person'/>
              </a>
          </div>
          :
          <></>
        }
    </>
  )
}

export default React.memo(Header)