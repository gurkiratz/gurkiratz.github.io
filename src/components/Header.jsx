import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import logo from '../assets/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen((prev) => !prev)
  }

  const menuList = ['Projects', 'Contact']

  const renderedMenuList = menuList.map((el, i) => (
    <NavLink
      key={i}
      to={el.toLowerCase()}
      className={({ isActive }) =>
        isActive ? 'text-gray-900' : 'md:text-gray-500'
      }
    >
      <span
        onClick={() => setisOpen(false)}
        className="text-normal block mb-5 md:mb-0 font-bold md:font-semibold md:text-[12px] md:uppercase cursor-pointer  md:tracking-wider hover:text-gray-900"
      >
        {el}
      </span>
    </NavLink>
  ))

  return (
    <>
      <header className="flex justify-between items-center  md:flex-col md:gap-1 md:items-start   lg:relative">
        <div className="flex gap-4 items-center md:flex-col md:gap-3  md:items-start lg:flex-row lg:gap-12">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="h-10 md:h-12 lg:h-20 rounded-full "
            />
          </Link>
          <Link to="/">
            <span
              onClick={() => setisOpen(false)}
              className="font-extrabold text-2xl block text-gray-800 lg:text-3xl lg:pt-1"
            >
              Gurkirat Singh
            </span>
          </Link>
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:block lg:absolute lg:left-[137px] lg:top-[54px]">
          <ul className="font-bold md:font-light md:flex md:gap-6">
            {renderedMenuList}
          </ul>
        </div>
        <span className="cursor-pointer md:hidden">
          {isOpen && <MdClose onClick={handleClick} className="text-3xl" />}
          {!isOpen && <FiMenu onClick={handleClick} className="text-3xl" />}
        </span>
      </header>
      {/* Menu-Mobile */}
      {isOpen && (
        <div className="space-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full mt-6 md:hidden block h-screen">
          {renderedMenuList}
        </div>
      )}
    </>
  )
}
