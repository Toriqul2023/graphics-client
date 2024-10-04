import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import AboutEducation from './AboutEducation'

const About = () => {
  
  const infos={
    experience:[
    {
    companyName: 'Khati Organic',
    duration:'Jul 2024- Present',
  },
    {
    companyName: 'Coder’s Trust Bangladesh',
    duration:'Jan 2024- Present',
  },
    {
    companyName: 'E-Shikhon',
    duration:'Aug 2022- Dec 2023',
  },
    {
    companyName: 'Perpetual Training Institute',
    duration:'Jan 2022- Aug 2022',
  },
    {
    companyName: 'KComputer World BD',
    duration:'Jun 2020- Dec 2021',
  },
],
education:[
  {
  varsity:'Tejgaon College',
  department: `BBA In Finance & Banking`,
  duration:'Session 2018-2019',
  
},
  {
  varsity:'Ideal Commerce College',
  department: `Higher Secondary School Certificate (H.S.C)`,
  duration:'Dhaka Board 2016-2017',
  
},
  {
  varsity:'Tejgaon Adasha School And College',
  department: `Secondary School Certificate (S.S.C)`,
  duration:'Dhaka Board 2014-2015',
  
},
]
  }
  return (
    <div className='lg:px-[40px]'>
           <div className='lg:w-[60%] w-[80%] mx-auto py-[50px]'>
                 <h1>About Me</h1>
                 <div className='content my-[22px]'>
                      <div className="top lg:flex justify-between ">
                               <div className="image py-[70px] lg:w-[30%] lg:mb-0 w-[100%] mb-5 shadow-xl border border-2 rounded-lg flex justify-center items-center mr-5 ">
                                   <Image 
                                   className='lg:w-[150px] lg:h-[150px] w-[] rounded-full block mx-auto'
                                   src={``}
                                    width={500} height={500} />
                               </div>
                               <div className='lg:w-[70%] shadow-xl border border-2  p-[40px] rounded-lg '>
                                <h3 className='mb-[22px] text-3xl'>Hi
                                 I am
                                    Towhid</h3>
                                    <p>
                                    NSDA & BTEB level-3 experienced Certified Graphic Designer with 6+ years of experience in branding, marketing, and digital/print design. I've trained students for the LEDP project through BASIS and currently mentor at Her Power Project by CodersTrust. With 2 years of experience at Computer World BD, I now design social media content for Khati Organic.

                                     Proficient in Adobe Creative Suite, I'm a creative problem solver eager to apply my skills in new opportunities within Graphic Design.
                                    </p>
                               </div>
                      </div>
                      <div className="middle mt-5 grid lg:grid-cols-2 gap-5 items-center">
                                 <AboutEducation info={'Experience'} insideInfos={infos.experience}/>
                                 <AboutEducation  info={'Educataion'} insideInfos={infos.education}/>
                      </div>
                 </div>
           </div>
    </div>
  )
}

export default About