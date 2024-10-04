'use client'
import axios from 'axios';
import DOMPurify from 'dompurify';
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const page = () => {
  const ref=useRef(null)
  const [content,setContent]=useState('')
  const [image,setImage]=useState('')
  const [title,setTitle]=useState('')


  const modules = {
    toolbar: {
      // Define the toolbar items
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      // Add the custom handlers directly under 'toolbar'
      // handlers: {
      //   image: imageHandler, // Custom image handler
      // },
    },
  };
  const handleImage=(e)=>{
    setImage(e.target.files[0])
  }
    const handleSubmit=async()=>{
      if(content){
        const formData=new FormData()

        formData.append('title',title)
        formData.append('content',content)
        formData.append('image',image)
        try{
          const response=await fetch(`http://localhost:4000/blog`,{
            method:'POST',
           
            body: formData,
          })
          const data = await response.json();
          console.log('Server Response:', data); 
   
     }

     catch(error){
      console.error('Error sending content to server:', error);
     }
      }
          
         
    }
    
 

  return (
    <div className='mt-[100px]'>
      <div className='mx-auto w-[60%] py-5'>
      <input className='text-white text-4xl my-5 p-5' placeholder='Title' type={'text'} value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="file" name="image" accept='image/*' id="" onChange={handleImage} />
      <ReactQuill ref={ref} theme="snow"  value={content} modules={modules}  onChange={newContent=>setContent(newContent)}/>
   
        <button onClick={handleSubmit} className='px-[50px] py-[10px] mt-[5%] bg-red-400'>Add</button>
      </div>
   
    
    
    </div>
  )
}

export default page