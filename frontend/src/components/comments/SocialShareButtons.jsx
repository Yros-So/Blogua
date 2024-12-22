import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const SocialShareButtons = () => {
  return <div className='w-full flex justify-between'>
    <a target='_blank' rel='noreferrer' href="/">
        <CiFacebook className='text-[#3b5998] w-12 h-auto' />
    </a>    
    <a target='_blank' rel='noreferrer' href="/">
        <BsTwitterX className='text-dark-light w-12 h-auto' />
    </a>
    <a target='_blank' rel='noreferrer' href="/">
        <BsReddit className='text-red-500 w-12 h-auto' />
    </a>
    <a target='_blank' rel='noreferrer' href="/">
        <BsWhatsapp className='text-green-500 w-12 h-auto' />
    </a>
  </div>
}

export default SocialShareButtons
