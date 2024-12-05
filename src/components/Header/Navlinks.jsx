import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { BiMovie } from 'react-icons/bi'
import { MdOutlineTheaterComedy } from 'react-icons/md'
import { TbTicket } from 'react-icons/tb'
import { FiSearch } from 'react-icons/fi'

const Navlinks = () => {
    const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
    const navLinks = [
        {
            id: 1,
            name: 'Афиша',
            icon: <BiMovie className="w-6 h-6"/>,
            link: "/"
        },
        {
            id: 2,
            name: 'Сеансы',
            icon: <MdOutlineTheaterComedy className="w-6 h-6"/>,
            link: "/sessions"
        },
        {
            id: 3,
            name: 'Билеты',
            icon: <TbTicket className="w-6 h-6"/>,
            link: "/ticket"
        },
        {
            id: 4,
            name: 'Поиск',
            icon: <FiSearch className="w-6 h-6"/>,
            link: "/search"
        },
    ]
  return (
    <>
    <ul className='flex items-center gap-8 max-[990px]:hidden'>
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