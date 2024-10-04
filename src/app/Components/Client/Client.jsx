'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Client.css';
import Image from 'next/image';

const Client = () => {
  return (
    <div className='px-[40px] my-[50px]'>
        <div className='w-[60%] mt-[50px] mx-auto text-black'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5"
      >
        <SwiperSlide className='text-center shadow-2xl border border-black border-2'>
            <Image 
            className='d-block mx-auto'
            style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src={'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/11/20/akram_khan.jpg'} 
            width={500} height={500}/>
            <h1>JOHN DOE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias blanditiis eos tempore quod natus,
                
                 at, minus quis, incidunt dolorum ex consectetur laboriosam eaque dignissimos harum esse iste sed fugiat.</p>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
            <Image 
            className='d-block mx-auto'
            style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src={'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/11/20/akram_khan.jpg'} 
            width={500} height={500}/>
            <h1>JOHN DOE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias blanditiis eos tempore quod natus,
                
                 at, minus quis, incidunt dolorum ex consectetur laboriosam eaque dignissimos harum esse iste sed fugiat.</p>
        </SwiperSlide>
        <SwiperSlide className='text-center'>
            <Image 
            className='d-block mx-auto'
            style={{width:'100px',height:'100px',borderRadius:'50%'}}
            src={'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/11/20/akram_khan.jpg'} 
            width={500} height={500}/>
            <h1>KabirDOEs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias blanditiis eos tempore quod natus,
                
                 at, minus quis, incidunt dolorum ex consectetur laboriosam eaque dignissimos harum esse iste sed fugiat.</p>
        </SwiperSlide>
       
        
      </Swiper>
        </div>
    </div>
  )
}

export default Client