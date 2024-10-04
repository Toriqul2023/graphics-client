import { LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'next-share'
import React from 'react'

const Social = () => {
  return (
    <>
          <button className='mr-3 ' aria-label="facebook" style={{backgroundColor:"transparent",border:'none',padding:'0',font:'inherit',color:'inherit',cursor:'pointer',outline:'none'}}>
            <svg viewBox="0 0 64 64" width="60" height="60" fill="white"  className='border rounded-xl shadow-inner hover:shadow-2xl bg-[#FF014F]'>
              <rect width="64" height="64" rx="0" ry="0" >

              </rect>
            <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" 
            style={{fontSize:'12px'}} fill="black">
             </path>
            </svg>
            </button>
            <button className='mr-3' aria-label="twitter" 
            style={{backgroundColor:"transparent",border:'none',padding:'0',font:'inherit',color:'inherit',cursor:'pointer',outline:'none'}}>
                <svg viewBox="0 0 64 64" width="60" height="60" className='border rounded-xl shadow-inner hover:shadow-2xl bg-[#FF014F]'>
                    <rect width="64" height="64" rx="0" ry="0"  fill="white" ></rect>
                    <path 
                     style={{fontSize:'12px'}}
                    d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 

                    15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z" fill="black">
                </path></svg></button>
            <button className='mr-3' aria-label="twitter" style={{backgroundColor:"transparent",border:'none',padding:'0',font:'inherit',color:'inherit',cursor:'pointer',outline:'none'}}>
                <svg viewBox="0 0 64 64" width="60" height="60" className='border-none rounded-2xl shadow-inner hover:shadow-2xl bg-[#FF014F]'>
                    <rect width="64" height="64" rx="0" ry="0"  fill="white"></rect>
                    <path 
                     style={{fontSize:'12px'}}
                    d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z 
                    M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" fill="black">

                    
                </path></svg></button>
           
    </>
  )
}

export default Social