import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Contact.css'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Input from './Input'

const Contact = () => {
  return (
    <div className='px-[40px] py-[100px]'>
        <div className='w-[60%] mx-auto grid grid-cols-2 gap-5 '> 
                               <div>
                                <h1 className='text-4xl mb-5'>Get In Touch With Us</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam hic tenetur accusamus voluptates? Adipisci, nesciunt. Qui harum provident assumenda!

                                </p>
                                <div className={styles.icongroup}>
                                       <div className='flex my-[30px]'>
                                        <FontAwesomeIcon icon={faHome} style={{
                                            fontSize:'25px',
                                            background:'#9430EB',
                                            padding:'15px',
                                            borderRadius:'10px',
                                            color:'white'
                                        }}  size={32}/>
                                        <div className='ml-3'>
                                        <h3>My Location</h3>   
                                        <p>22/A Kunipara,Tejgaon</p>    
                                        </div>
                                       
                                       </div>
                                       <div className='flex my-[30px]'>
                                        <FontAwesomeIcon icon={faHome} style={{
                                            fontSize:'25px',
                                            background:'#9430EB',
                                            padding:'15px',
                                            borderRadius:'10px',
                                            color:'white'
                                        }}  size={32}/>
                                        <div className='ml-3'>
                                        <h3>My Location</h3>   
                                        <p>22/A Kunipara,Tejgaon</p>    
                                        </div>
                                       
                                       </div>
                                       <div className='flex my-[30px]'>
                                        <FontAwesomeIcon icon={faHome} style={{
                                            fontSize:'25px',
                                            background:'#9430EB',
                                            padding:'15px',
                                            borderRadius:'10px',
                                            color:'white'
                                        }}  size={32}/>
                                        <div className='ml-3'>
                                        <h3>My Location</h3>   
                                        <p>22/A Kunipara,Tejgaon</p>    
                                        </div>
                                       
                                       </div>
                                   
                                </div>

                               </div>
                               <div className=' rounded-xl'>
                                <form action="">
                                    <Input/>
                                </form>

                               </div>
        </div>

    </div>
  )
}

export default Contact