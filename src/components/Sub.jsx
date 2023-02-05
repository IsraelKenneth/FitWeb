import React from 'react'

const Sub = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-[#FFA849] mt-[7rem] py-[8rem]  w-full '> 
      <div className='flex flex-col justify-center items-center mb-[3rem]'>
        <h2 className='flex-1 font-Oswald uppercase font-bold ss:text-[38px] text-[23px] text-white ss:leading-[32.8px] leading-[28px] my-3'>
        Don&apos;t miss out on new Tips and Tricks
        </h2>
        <p className='flex-1 text-center font-Montserrat font-semi ss:text-[26px] text-[20px] max-w-[58rem] text-white ss:leading-[32.8px] leading-[28px] my-3'>
        We are committed to processing the information in order to contact you and talk about your project. 
        </p>
      </div>   

      <div className='flex flex-row justify-center items-center w-full '>
              <input className='flex w-[30rem] mr-3 py-2 px-10 ' placeholder='Enter your email'></input>
              <button className=' flex bg-black hover:bg-[#eb8d29] text-white font-bold py-2 px-10  rounded-[2px]'> SUBSCRIBE NOW</button>

      </div> 
          
    </section>
  )
}

export default Sub