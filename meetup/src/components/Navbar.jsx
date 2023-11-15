import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import  logo  from "../assets/logo.png"
import { navLinks } from "./index"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"


const Navbar = () => {
  
    const [toggle, setToggle] = useState(false);
    return (
      <nav className='w-full flex p-6 pt-10 justify-between items-center navbar absolute sm: pl-7 md:ml-20' >
        <img src= { logo } alt='logo' 
        className='w-[100px] h-[50px] z-20 '/>
        <ul className='list-none sm:flex hidden justify-center items-center flex-1 text-white z-20'>
        <li className='font-normal text-2xl p-8'>
           <a href='/'>Home</a></li>
          <li className='font-normal  text-2xl p-8'><a  href='#about'>About us</a></li>
            <li className='font-normal text-2xl p-8'><a href='#events'>Events</a></li>
            <li className='font-normal text-2xl p-8'><a href='#gallary'>Gallary</a></li>
            <li className='font-normal text-2xl p-8'><a href='#contact'>Contact</a></li>
  
        </ul>
  
        <div className='sm:hidden flex flex-1 justify-end items-center  p-11'>
          <img src={toggle ? close : menu} 
          alt='menu'
          className='w-[28px] h-[28px] object-contain z-20'
          onClick={() => setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-10 min-w-[140px] rounded-xl sidebar z-10`}
          >
              <ul className='list-none flex  flex-col justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white mr-10 z-20`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
  
  
            </li>
          ))}
  
        </ul>
  
          </div>
  
        </div>
  
      </nav>
  // const [nav, setNav] = useState(false);
  // const handleNav = () => {
  //   setNav(!nav);
  //   if(!nav) {
  //       document.body.style.overflow = 'hidden'
  //   } else {
  //       document.body.style.overflow = 'scroll'
  //   }
  // };
  // const [overlayVisible, setOverlayVisible] = useState(true);

  // const handleLinkClick = () => {
  //   setOverlayVisible(false);
  // };

  // return (
  //   <div className='absolute w-full flex justify-between lg:p-20 items-center'>
  //     <img src= { logo } alt='logo' className='w-[100px] h-[50px] z-20'/>
  //     <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={35} />
  //     <div
  //       className={
  //         nav
  //           ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
  //           : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
  //       }
  //     >
  //       <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
  //         <li className='font-bold text-3xl p-8'>
  //           <a href='/'>Home</a></li>
  //         <li className='font-bold text-3xl p-8'><a onClick={handleLinkClick} href='#section'>About us</a></li>
  //         <li className='font-bold text-3xl p-8'><a href='#'>Events</a></li>
  //         <li className='font-bold text-3xl p-8'><a href='#'>Gallary</a></li>
  //         <li className='font-bold text-3xl p-8'><a href='#'>Contact</a></li>
  //       </ul>
  //     </div>
  //   </div>
  );
};

export default Navbar;