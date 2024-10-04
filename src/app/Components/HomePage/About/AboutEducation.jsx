import Image from 'next/image'
import React from 'react'
import Khatilogo from '@/public/Khatilogo.jpg'

const AboutEducation = ({info,insideInfos=[]}) => {
  return (
    <>
        <div className=''>
                                        <h3 className='my-5'>{info}</h3>
                                        <div className='shadow-2xl rounded-lg p-[40px] border border-2'>
                                            {insideInfos.map((insideInfo,index)=>( <div key={index} className='mb-[40px] shadow-2xl bg-[#32015C] p-5 rounded-xl'>

                                        
<div className='flex text-white'>
   
    <div className='flex justify-between items-center'>
      <div className='mr-4'>
      <Image
      className='w-[50px] h-[50px]'
      width={500} height={500}
       src={Khatilogo}/>
      </div>
    <div>
    <h4 className='mb-2  text-white'>{insideInfo?.companyName ? insideInfo?.companyName : insideInfo?.varsity}</h4>
        <h3 className='text-white'>{insideInfo?.department}</h3>
        <p className='text-[13px] font-[300] py-[2px] px-[10px] rounded-2xl inline-block bg-[#c179ff]'>{insideInfo?.duration}</p>
    </div>
    </div>
       
</div>
</div>






))}
                                       
                                     
                                     
                                      </div>
                                 </div>
    </>
  )
}

export default AboutEducation