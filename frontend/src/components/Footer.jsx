import React from 'react'
import images from '../constants/images'
import { FaSkype } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiYr } from "react-icons/si";

const Footer = () => {
  return (
    <section className='bg-dark-hard'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10' >
        <div className='col-span-5 md:col-span-4 lg:col-span-2 '>
          <h3 className='text-dark-light font-bold md:text-lg'> Produit </h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 md:text-base'>
            <li>
              <a href="/"> LandPage </a>
            </li>
            <li>
              <a href="/"> Features </a>
            </li>
            <li>
              <a href="/"> Documentation </a>
            </li>
            <li>
              <a href="/"> Referral Program </a>
            </li>
            <li>
              <a href="/"> Pricing </a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2'>
          <h3 className='text-dark-light font-bold md:text-lg'> Services </h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a href="/"> Documentation </a>
            </li>
            <li>
              <a href="/"> Design </a>
            </li>
            <li>
              <a href="/"> Themes </a>
            </li>
            <li>
              <a href="/"> Illustration </a>
            </li>
            <li>
              <a href="/"> UI Kit </a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto'>
          <h3 className='text-dark-light font-bold md:text-lg'> Company </h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a href="/"> About </a>
            </li>
            <li>
              <a href="/"> Terms </a>
            </li>
            <li>
              <a href="/"> Privacy Policy </a>
            </li>
            <li>
              <a href="/"> Careers </a>
            </li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-4 lg:col-span-2' >
          <h3 className='text-dark-light font-bold md:text-lg'> More </h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4'>
            <li>
              <a href="/"> Documentation </a>
            </li>
            <li>
              <a href="/"> License </a>
            </li>
            <li>
              <a href="/"> Changelog </a>
            </li>
          </ul>
        </div>
        <div className='col-span-10 md:col-span-4 lg:col-span-2'>
          <img src={images.Logo} alt="Logo" className='w-10 h-10 brightness-1 invert mx-auto md:mx-0' />
          <p className='text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm'>
            Build a modern and creative website with crealand
          </p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
            <li>
              <a href="/">
              <FaSkype className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <IoLogoYoutube className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaInstagram className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <BsTelegram className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaFacebookSquare className='w-6 h-auto' />
              </a>
            </li>
            <li>
              <a href="/">
              <FaWhatsapp className='w-6 h-auto' />
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10  '>
          <div className='bg-primary text-white p-3 rounded-full'>
            <SiYr className='w-7 h-auto' />
          </div>
          <p className='font-bold italic text-dark-light'> Copyright ⓒ 2023. Made by {" "} 
            <span className='font-roboto not-italic font-extrabold'> Yros_So.</span> 
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
