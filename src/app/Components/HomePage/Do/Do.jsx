import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Do.css'


const Do = () => {
  return (
    <div className='px-[40px] py-[50px]  border-top-2 shadow-xl'>
           <div className='w-[60%] mx-auto'>
            <div className='mt-[50px] mb-[50px]'>
            <h4 className='text-[#FF014F] mb-[22px] '>Features</h4>
            <h2>What I Do</h2>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                 <div className=' p-[12%] rounded-2xl hovers bg-[#5f1c99]'>
                    <FontAwesomeIcon className='mb-[20px]' style={{color:'#FF014F',fontSize:'35px'}} icon={faBars}/>
                          <h3 className='mb-[30px]'>BUSINESS STRATIGY</h3>
                          <p className='mb-[20px]'> I throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                 </div>
               
              
            </div>
              
           </div>
    </div>
  )
}

export default Do