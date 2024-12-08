import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { BiMovie } from 'react-icons/bi'
import { MdOutlineTheaterComedy } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { BsBookmark } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const Navlinks = () => {
    const {t, i18n} =  useTranslation()
    const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
    const navLinks = [
        {
            id: 1,
            name: t("header.poster"),
            icon: <BiMovie className="w-6 h-6"/>,
            link: "/"
        },
        {
            id: 2,
            name: t("header.genre"),
            icon: <MdOutlineTheaterComedy className="w-6 h-6"/>,
            link: "/sessions"
        },
        {
            id: 3,
            name: t("header.favourite"),
            icon: <BsBookmark className="w-6 h-6 p-[1px]"/>,
            link: "/favourite"
        },
        {
            id: 4,
            name: t("header.search"),
            icon: <FiSearch className="w-6 h-6"/>,
            link: "/search"
        },
    ]
  return (
    <>
    <ul className='flex items-center gap-8 max-[990px]:hidden max-[1100px]:gap-5'>
        {navLinks?.map(item => (
                <li className={`${Mode ? "text-black" : "text-white-person"}`} key={item.id}>
                    <NavLink to={item.link} className='link'>
                        <div className='flex flex-col items-center gap-2'>
                            {item.icon}
                            <p className='font-aeonik font-medium text-[12px]'>{item.name}</p>
                        </div>
                    </NavLink>
                </li>
        ))}
    </ul>
    </>
  )
}

export default React.memo(Navlinks)