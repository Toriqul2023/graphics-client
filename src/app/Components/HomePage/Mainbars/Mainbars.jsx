'use client'
import { FacebookIcon, FacebookShareButton } from 'next-share'
import Image from 'next/image'
import React from 'react'
import Social from '../../Social/Social'
import Banner from '@/public/logo.png'

const Mainbars = () => {
  return (
    <div className='lg:px-[40px]  lg:mt-[100px] shadow-xl'>
      <div className='w-[80%] lg:w-[60%] mx-auto grid lg:grid-cols-2 lg:py-[50px]'>
        <div className='lg:mt-[50px] mt-[120px]'>
        <h4 className='mb-[22px] '>Welcome to my world</h4>
      <h1 className=' mb-[30px] '>Hi, I’m 
         <span className='text-[#932fea] '> Towhid<br/></span>a Designer</h1>
      <p className=' text-justify  mb-[10%]'>I'm a creative problem solver eager to apply my skills in new opportunities within Graphic Design.
        I've trained students for the LEDP project through BASIS and currently mentor at Her Power Project by CodersTrust.</p>
         <div className="social">
          <h4 className='font-[600] mb-[20px]'>Find with me</h4>
          <Social/>
            
         </div>
        </div>
        <div className=' relative flex lg:justify-self-end inline-block'>
          
           <Image className='block ml-auto w-[100%]' src={Banner} 
           width={500} height={500} alt='banner'/>
           
        </div>
     
      </div>
     
       
    </div>
  )
}

export default Mainbars