'use client'
import useDatafetching from '@/app/Hooks/useDatafetching'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
  const queryClient = useQueryClient()
  const [posts,setPost]=useState([])
// useEffect(()=>{
//         fetch('http://localhost:4000/blog')
//         .then(res=>res.json())
//         .then(data=>{
//           setPost(data)
//           console.log(data)
        
//         })
// },[posts])

// const {data,error,isLoading} = useQuery({ queryKey: ['todos'], queryFn: async ()=>{
//       const response=await fetch('http://localhost:4000/blog')
//       if(!response.ok){
//         throw new Error('Network response was not ok');
//       }
//       return response.json()

//   }, 
 

// })


const {data,isLoading,error}=useDatafetching()

if (isLoading) return <div className='h-[100vh] mt-[100px] text-black text-center'><h1 className=''>Please Wait for few times</h1></div>;
  return (
    <div className='mt-[100px] text-white'>
      <div className='w-[60%] mx-auto py-5 grid grid-cols-2 gap-3'>
      
      {data?.map((post, index) => (
        <div key={index} className='post-content shadow-xl flex my-4 items-center border'>
        <div className='w-[40%]'>
            <Image className='w-[100%] h-[300px]' src={`http://localhost:4000/uploads/${post?.image}`} width={500}  height={500}/>
        </div>
        <div className='p-5 w-[60%]'>
        <h1 className='text-3xl'>{post?.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque,
           velit vero magnam provident eum cum est quidem similique nostrum, repudiandae aliquam. Debitis sint minima, aut ipsum velit laudantium magnam.</p>
           <button className='px-[50px] py-[10px] bg-[#32015C] my-5'>Read More</button>
        </div>
        
          
        </div>
      ))}
      </div>
    
    </div>
  )
}

export default page