import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { Fragment, useState } from 'react'
import logo from '../assets/logo.jpg'
export default function Header() {
  const [isOpen, setisOpen] = useState(false)

  const handleClick = () => {
    setisOpen((prev) => !prev)
  }

  const menuList = ['Blogs', 'Projects', 'Contact', 'About', 'Now']

  const renderedMenuList = menuList.map((el, i) => (
    <li
      key={i}
      className="text-sm  mb-5 md:mb-0 font-bold md:font-normal md:text-[12px] md:uppercase cursor-pointer md:text-gray-400 md:tracking-wider hover:text-gray-800"
    >
      {el}
    </li>
  ))

  return (
    <div>
      <header className="flex justify-between items-center px-6 py-8 md:flex-col md:gap-1 md:items-start md:px-16 lg:py-16 lg:px-20  lg:relative">
        <div className="flex gap-4 items-center md:flex-col md:gap-3  md:items-start lg:flex-row lg:gap-8">
          <img
            src={logo}
            alt=""
            className="h-10 md:h-12 lg:h-16 rounded-full"
          />
          <p className="font-['Lustria'] font-bold text-lg lg:text-2xl">
            Gurkirat Singh
          </p>
        </div>

        <div className="hidden md:block lg:absolute lg:left-[183px] lg:top-[102px]">
          <ul className="font-bold md:font-light md:flex md:gap-6  ">
            {renderedMenuList}
          </ul>
        </div>
        <span className="cursor-pointer md:hidden">
          {isOpen && <MdClose onClick={handleClick} className="text-xl" />}
          {!isOpen && <FiMenu onClick={handleClick} className="text-xl" />}
        </span>
      </header>
      {/* Menu-Mobile */}
      {isOpen && (
        <ul className="px-12 mt-2 md:hidden h-screen">{renderedMenuList}</ul>
      )}
    </div>
  )
}
