import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';
import { black, white } from 'tailwindcss/colors';

const Mode = () => {
    const dispatch = useDispatch();
    const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
    const mode = () => {
        dispatch(toggleTheme())
        document.body.style.background = Mode ? black :  white
    }
  return (
    <button
      onClick={mode}
      className={`p-4 rounded-full border duration-300 ${
        Mode ? 'bg-gray-800' : 'bg-yellow-400 border-black-person'
      }`}
    >
      {Mode ? (
        <FaMoon className="text-yellow-400" />
      )
      :
      (
        <FaSun className="text-gray-800" />
      )}
    </button>
  )
}

export default React.memo(Mode)