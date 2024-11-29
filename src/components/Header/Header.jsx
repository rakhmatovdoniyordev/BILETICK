import React from 'react'
import { NavLink } from 'react-router-dom'
import Mode from '../Mode/Mode'
import Language from "./Language"
import logo from "../../assets/LOGO.png"
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <>
        <header className='relative'>
          <div className='container'>
            <nav className='flex justify-between items-center h-[90px]'>
              <div className='flex items-center'>
                <NavLink to={"/"}>
                  <img src={logo} alt="" className='max-w-[112px]'/>
                </NavLink>
              </div>
              <div className='absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-[30px] items-center'>
                <Navlinks/>
              </div>
              <Language/>
            </nav>
          </div>
        </header>

        <div className='fixed bottom-16 right-[10%] z-[101]'>
            <Mode/>
        </div>
    </>
  )
}

export default Header