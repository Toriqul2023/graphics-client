'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'

const useDatafetching = () => {
    const [posts,setPost]=useState()
    const queryClient = useQueryClient()
    const {data,error,isLoading} = useQuery({ queryKey: ['todos'], queryFn: async ()=>{
        const response=await fetch('http://localhost:4000/blog')
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json()
  
    }, 
})
  
  return {data,error,isLoading}
  
}

export default useDatafetching