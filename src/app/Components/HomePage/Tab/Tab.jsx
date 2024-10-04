'use client'
import React, { useState } from 'react'
import './Tab.css'
import Link from 'next/link'
import Education from '../Education/Education'

const Tab = () => {
    const [active,setActive]=useState(1)

  return (
    <div className='px-[40px] py-[50px]'>
       <div className='w-[80%] mx-auto'>
           <div className='mt-[50px] '>
                  <h4 className='mb-[22px] text-[#FF014F] text-center'>7+ Years of Experience</h4>
                  <h1 className='text-center'>My Resume</h1>
                  <div className=''>
                      <ul className='flex  w-[100%] mx-auto justify-center my-[50px] '>
                        <li onClick={()=>setActive(0)} className='  px-[40px] py-[20px] border border-2 shadow-inner hover:shadow-2xl'><Link scroll={false} className={`${active == 0 ? 'text-red-400':'text-black'}`} href={''}>EDUCATION</Link></li>
                        <li onClick={()=>setActive(1)} className='  px-[40px] py-[20px] border border-2 shadow-inner hover:shadow-2xl'><Link scroll={false}  className={`${active == 1 ? 'text-red-400':'text-black'}`} href={''}>EDUCATION</Link></li>
                        <li onClick={()=>setActive(2)} className=' px-[40px] py-[20px] border border-2 shadow-inner hover:shadow-2xl'><Link scroll={false}  className={`${active == 2 ? 'text-red-400':'text-black'}`} href={''}>EDUCATION</Link></li>
                        
                        <li onClick={()=>setActive(3)} className=' px-[40px] py-[20px] border border-2 shadow-inner hover:shadow-2xl'><Link scroll={false}  className={`${active == 3 ? 'text-red-400':'text-black'}`} href={''}>EDUCATION</Link></li>
                        <li onClick={()=>setActive(4)} className=' px-[40px] py-[20px] border border-2 shadow-inner hover:shadow-2xl'><Link scroll={false}  className={`${active == 4 ? 'text-red-400':'text-black'}`} href={''}>EDUCATION</Link></li>
                        
                      </ul>
                      <div>
                      {
                        active == 0 ?  (
                           <Education/>
                        ): active== 1 ?(
                            <h3>hello1</h3>
                        ):''
                     
                        
                        
                    }
                      </div>
                 

   
                  </div>
           </div>
        </div> 
    </div>
  )
}

export default Tab