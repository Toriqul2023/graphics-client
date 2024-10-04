import Image from 'next/image'
import './Article.css'

const Article = () => {
  return (
    <div className='px-[40px] '>
        <div className="w-[60%] py-[50px] mx-auto">
            <h1 className='mb-[22px]'>Articles</h1>
            <div className="grid grid-cols-3 gap-5">
                 <div className='p-[20px] shadow-lg border border-3 rounded-lg'>
                    <Image 
                    className='w-[100%] h-[300px]'
                    src={`https://olyve.tanshcreative.com/wp-content/uploads/post-img6-2-1000x800.jpg`}
                    width={500} height={500} alt='article1' />
                    <div className='text-black creative px-[10px] py-[2px] bg-green-500 inline-block rounded-2xl my-5'>
                        Creative
                    </div>
                    <h3 className='mb-5'>Why Creative people are awesome</h3>
                    <span></span>
                 </div>
                 <div className='p-[20px] shadow-lg border border-3 rounded-lg'>
                    <Image 
                    className='w-[100%] h-[300px]'
                    src={`https://olyve.tanshcreative.com/wp-content/uploads/post-img1-1000x800.jpg`}
                    width={500} height={500} alt='article1' />
                    <div className='text-black creative px-[10px] py-[2px] bg-green-500 inline-block rounded-2xl my-5'>
                        Creative
                    </div>
                    <h3 className='mb-5'>Why Creative people are awesome</h3>
                    <span></span>
                 </div>
                 <div className='p-[20px] shadow-lg border border-3 rounded-lg'>
                    <Image 
                    className='w-[100%] h-[300px]'
                    src={`https://olyve.tanshcreative.com/wp-content/uploads/post-img5-1000x800.jpg`}
                    width={500} height={500} alt='article1' />
                    <div className='creative text-black px-[10px] py-[2px] inline-block rounded-2xl my-5'>
                        Creative
                    </div>
                    <h3 className='mb-5'>Why Creative people are awesome</h3>
                    <span></span>
                 </div>
                
            </div>
        </div>

    </div>
  )
}

export default Article