'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Logo} from '../../../public/logo.png'

const Navbar = () => {
  return (
   
       <div className="navbar fixed flex z-[999] bg-[#32015c] h-[100px] top-0 justify-between items-center px-[40px] text-white shadow-2xl">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link href={''}>HOME</Link>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li> <Link href={''}>Item 1</Link></li>
            <li> <Link href={''}>Item 1</Link></li>
          </ul>
        </li>
        <li> <Link href={''}>Item 1</Link></li>
      </ul>
    </div>
    <Link href={''} className="btn btn-ghost text-xl">
        <Image src={'https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logo-dark.png'}
        height={500}
        width={500}
        style={{width:'139px',height:'70px',display:'inline-block',marginTop:'-10px'}} />
    </Link>
  </div>
  <div className="navbar-end w-[80%] justify-self-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='mr-3'><Link href={''}>HOME</Link></li>
      <li className='mr-3'><Link href={''}>About</Link></li>   
      <li className='mr-3'><Link href={''}>RESUME</Link></li>
      <li className='mr-3'><Link href={''}>CLIENTS</Link></li>
      <li className='mr-3'><Link href={'/write/show'}>BLOG</Link></li>
      <li className='mr-3'><Link href={''}>CONTACT</Link></li>
     
    </ul>
  
 
    <button className="px-[30px] py-[15px] text-[12px] font-semibold text-white shadow-2xl rounded-lg inline-block ml-5 border">BUY NOW</button>
  </div>
</div>
 
  )
}

export default Navbar