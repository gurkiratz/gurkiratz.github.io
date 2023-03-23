import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import logo from '../assets/logo.jpg'

export default function Header2() {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen((prev) => !prev)
  }

  const menuList = ['Blogs', 'Projects', 'Contact', 'About', 'Now']

  const renderedMenu = menuList.map((el, i) => (
    // <li
    //   key={i}
    //   className="text-sm  mb-5 md:mb-0 font-bold md:font-medium md:text-[12px] md:uppercase cursor-pointer md:text-gray-500 md:tracking-wider hover:text-gray-900"
    // >
    //   {el}
    // </li>
    <a
      className="text-black font-bold md:text-gray-500 md:font-semibold no-underline md:hover:text-black"
      key={el}
      href={`/${el[0].toLowerCase() + el.slice(1)}`}
    >
      {el}
    </a>
  ))

  return (
    <>
      <header className="relative z-20 flex justify-between items-center">
        {/* Image logo */}
        <div className="flex md:block lg:flex items-center max-w-full">
          <a href="/" className="flex items-center no-underline">
            <img
              src={logo}
              alt=""
              className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
            />
          </a>
        </div>
        {/* Image logo End*/}
        {/* Name + MenuDesktop*/}
        <div>
          <a
            href="/"
            className="block text-black no-underline  text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
          >
            Gurkirat Singh
          </a>
          <div className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6">
            {renderedMenu}
          </div>
        </div>
        {/* Name + MenuDesktop end */}
        <div className="block md:hidden">
          <span className="cursor-pointer">
            {isOpen && <MdClose onClick={handleClick} className="text-xl" />}
            {!isOpen && <FiMenu onClick={handleClick} className="text-xl" />}
          </span>
        </div>
      </header>
      {/* Menu-Mobile */}
      <div
        style={{ display: 'none' }}
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden z-10 bg-white fixed pin pt-24`}
      >
        <div className="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full">
          {renderedMenu}
        </div>
      </div>
    </>
  )
}
