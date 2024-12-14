import React, { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { images } from "../constants"


const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About us","Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "FAQ", type: "link" },
]

const NavItem = ({item}) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState
    })
  }

  return (
    <li className="relative group"> 
      {item.type === "link" ? (
        <>  
        <a className="px-4 py-2" href="/">
          {item.name}
        </a> 
      <span className="cursor-pointer text-green-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">/</span> 
      </>) : (
        <div className="flex flex-col items-center">
        <button className="px-4 py-2 flex gap-x-1 items-center" onClick={toggleDropdownHandler} >
          <span>{item.name}</span>
          <MdOutlineArrowDropDown />
        </button>
        <div className={ dropdown ? "block" : 'hidden lg:hidden transition-all duration-300 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max'}>
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                {item.items.map((page, index) => (
                  <a key={index} href="" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"> {page} </a>
                ))}
            </ul>
        </div>
      </div>
      )}

  </li>
  )
}

const Header = () => {

  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  }


  return (
    <section className="sticky top-0 left-0 right-0 z-50">
        <header className="container mx-auto px-5 flex justify-between py-4 items-center">
            <div>
              {/* <h2 className="">Volunteer</h2> */}
                <img className="w-10 h-10" src={images.Logo} alt="logo" />
            </div>

            <div className="lg:hidden z-50">
              {navIsVisible ? ( <IoMdClose className="w-6 h-6" onClick={navVisibilityHandler} /> ) : ( <CiMenuBurger className="w-6 h-6" onClick={navVisibilityHandler} /> )}
            </div>

            {/* Settle the resposivity from mobile devices But I have a issue in the ${} it doesn't work then I used the oldest mode ""+"" for make a joining between 2 parameters in the (className) */}
            <div 
            className= {navIsVisible ? (" right-0 transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] ") : (" -right-full transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] ") + ' transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center'}>
              <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
                {navItemsInfo.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </ul>
              <button className="mt-5 lg:mt-0 border-2 border-green-500 px-8 py-2 rounded-full text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">Sign In</button>
            </div>

        </header>
    </section>
  );
};
export default Header;