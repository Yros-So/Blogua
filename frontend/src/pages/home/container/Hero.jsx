import React from 'react'
import { images } from '../../../constants'
import { IoMdSearch } from "react-icons/io";

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
      <div className='mt-10 lg:w-1/2'>
        <h1 className='font-roboto text-2xl text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px]'>Read the most interesting articles</h1>
        <p className='text-dark-light mt-2 text-center md:text-pretty lg:text-base xl:text-xl lg:text-left'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
        </p>
        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative' >
          <div className='relative' >
            <IoMdSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />            
            
            <input className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4' type="text" placeholder='Search' />
          </div>
          <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'> 
            Search  
          </button>
        </div>
        <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
          <span className='text-dark-light font-semibold italic lg:mt-4 lg:text-sm xl:'> Popular Tag: </span>
          <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'> Design </li>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'> User Experiences </li>
            <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'> User Interfaces </li>
          </ul>
        </div>
      </div>
      <div className='hidden lg:block lg:1/2 mt-2 md:px-10'>
        <img className='w-15 h-35' src={images.HeroImage } alt="user are reading articles" />
      </div>
    </section>
  )
}

export default Hero
