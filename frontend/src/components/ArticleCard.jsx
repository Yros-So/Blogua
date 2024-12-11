import React from 'react'
import images from '../constants/images'
import { FaCheck } from "react-icons/fa6";

const ArticleCard = ({className}) => {
  return (
    <div className={'rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px ] '+className}>
      <img src={ images.Post01 } alt="title" className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60" />
      <div className='p-5'> 
        <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Futur of Work</h2>
        <p className='text-dark-light mt-3 text-sm md:text-lg'>Majority of people will work in jobs which don't exist today</p>
        <div className='flex justify-between flex-nowrap items-center mt-6'>
          <div className='flex items-center rounded-xl overflow-auto gap-x-2 md:gap-x-2.5'>
            <img src={ images.Prof } alt="post profil" className='w-9 h-9 md:w-10 md:h-10' />
            <div className='flex flex-col'>
              <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                Samir Alim
              </h4>
              <div className='flex items-center gap-x-2'>
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <FaCheck className='w-1.5 h-1.5 text-[#36B37E] '/>
                </span>
                <span className='italic text-dark-light text-xs md:text-sm'>Verified Writer</span>
              </div>
            </div>
          </div>
          <span className='font-bold text-dark-light text-sm md:text-base' >02 November</span>

        </div>
      </div>
    </div>
  )
}

export default ArticleCard
