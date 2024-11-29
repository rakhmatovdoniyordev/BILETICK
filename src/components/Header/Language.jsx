import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { languages } from '../../static'
import ru from "../../assets/RU.png"
import { useSelector } from 'react-redux'

const Language = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);

  return (
    <div className="relative flex items-center gap-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
      >
        <img
          src={ru}
          alt="Language Flag"
          className="w-5 h-5 rounded-full"
        />
        <span className={`${Mode ? "text-black" : "text-white-person"} font-aeonik`}>Ру</span>
        <MdKeyboardArrowDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''} ${Mode ? "text-black" : "text-white-person"}`} />
      </button>
      <button className='px-[65px] py-[18px] rounded-lg bg-red-person text-white-person'>Войти</button>


      {isOpen && (
        <div className={`absolute top-full ${Mode ? "bg-black text-white" : "bg-white text-black"}  mt-2  border border-gray-700 rounded-md py-1 min-w-[100px]`}>
          {languages.map((lang) => (
            <button
              key={lang}
              className="w-full px-4 py-2 text-left "
              onClick={() => setIsOpen(false)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Language