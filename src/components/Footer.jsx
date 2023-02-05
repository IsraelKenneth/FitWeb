import React from 'react'
import {Driblle, Group1, Logo1, twitter } from "../assets"

const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-black py-[8rem]  w-full '>
      <div className='flex flex-row justify-center items-center mb-[3rem]'>
        <p className='mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]  text-white ss:leading-[32.8px] leading-[28px] '>
          Programs
        </p>

        <p className='mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]   text-white ss:leading-[32.8px] leading-[28px]'>
          Magzine
        </p>

        <p className='mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]  text-white ss:leading-[32.8px] leading-[28px]'>
          JB TV
        </p>

        <p className=' mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]   text-white ss:leading-[32.8px] leading-[28px]'>
          Meet Angela
        </p>

        <p className='mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]   text-white ss:leading-[32.8px] leading-[28px]'>
          Schedule
        </p>

        <p className='mx-[1rem] text-center font-Montserrat font-semi ss:text-[19px] text-[16px]   text-white ss:leading-[32.8px] leading-[28px]'>
          Shop
        </p>
        
      </div>

      <div className=' w-[70%] bg-white h-[1px] opacity-50 mb-[3rem]'  />

      <div className='flex flex-row justify-between items-center w-[70%]'>
    <img src={Logo1} alt='Jamila fitness' />
    <div className='flex flex-row items-center justify-between w-[20%]'>
    <img  src={twitter} alt="" />
          <img src={Group1} alt="" />
          <img src={Driblle} alt="" />
    </div>
      </div>

    </section>
  )
}

export default Footer