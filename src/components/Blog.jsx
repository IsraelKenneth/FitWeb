import React from 'react'
import { Group2, Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, Bitmap } from '../assets'

const Blog = () => {
  return (
    <section className='flex flex-row justify-center items-center  pt - [1rem]  w - full '>
    <div className='flex flex-col mx-[10rem] w-full'>
        <div className='flex flex-1 flex-row justify-between items-center'>
                  <h2 className='flex-1 font-Oswald uppercase font-bold ss:text-[28px] text-[13px] text-black ss:leading-[50.8px] leading-[48px]'>
        Blog Articles
        </h2>
        <img className='flex  w-[50%]' src={Group2} />

        </div>

        <div className='flex sm:flex-row flex-col justify-between items-center w-full'>
                  <div className='flex sm:flex-row flex-col mt-10 justify-between items-start w-full'>
            <div className='flex flex-col max-w-[320px]'>
                          <img className='w-full object-contain hover:scale-95 ease-in-out duration-300' src={Blog1} alt="fitness woman" />
                          <h3 className='flex-1 font-Montserrat font-bold ss:text-[21px] text-[13px] text-black ss:leading-[32.8px] leading-[28px] my-3'>
                              Not an expert? Not a problem. Here&apos;s why.
                </h3>
                          <p className='flex-1 font-Montserrat font-semi ss:text-[15px] text-[13px] text-black ss:leading-[32.8px] leading-[28px] mb-3'>
                              Worried about teaching or leading because you&apos;re not an &apos;expert&apos;? Research says that&apos;s an advantage.
                </p>
                <div className='flex flex-row items-center '>
                    <img className='flex justify-center items-center' src={Bitmap} alt ="bitmap fitness" />

                    <div className='flex flex-col ml-8 items-center justify-center'>
                                  <h4 className='flex-1 font-Montserrat font-bold ss:text-[17px] text-[13px] text-black ss:leading-[32.8px] leading-[28px]'>
                        Amanda Minorva <br/>
                        </h4>
                                  <p className='leading-none'>
                        Marketing Manager
                        </p>
                    </div>
                </div>
            </div>

                      <div className='flex flex-col max-w-[320px] '>
                          <img className='w-full object-contain hover:scale-95 ease-in-out duration-300' src={Blog2} alt="fitness woman" />
                          <h3 className='flex-1 font-Montserrat font-bold ss:text-[21px] text-[13px] text-black ss:leading-[32.8px] leading-[28px] my-3'>
                              Self care for entrepreneurs (Yes, you need it).
                          </h3>
                          <p className='flex-1 font-Montserrat font-semi ss:text-[15px] text-[13px] text-black ss:leading-[32.8px] leading-[28px] mb-3'>
                              Avoid burnout, reduce stress, and keep yourself healthy with these practical self-care tips for entrepreneurs.
                          </p>
                          <div className='flex flex-row items-center'>
                              <img src={Bitmap} alt="bitmap fitness" />

                              <div className='flex flex-col ml-8 justify-center items-center'>
                                  <h4 className='flex-1 font-Montserrat font-bold ss:text-[17px] text-[13px] text-black ss:leading-[32.8px] leading-[28px]'>
                                      Ashley William <br />
                                  </h4>
                                  <p className=' leading-none'>
                                      Marketing Manager
                                  </p>
                              </div>
                          </div>
                      </div>

<div className='flex flex-col max-w-[420px]'>
<h2 className='flex-1 font-Oswald uppercase font-bold ss:text-[18px] text-[13px] text-black ss:leading-[50.8px] leading-[48px] mb-8'>
Popular Articles
</h2>

<div className='flex flex-row '>
<div className='flex flex-col max-w-[300px]'>
<h3 className='flex-1 font-Montserrat font-bold ss:text-[18px] text-[13px] text-black ]'>The 8 best landing page builders, reviewed</h3>
  <h5 className='felx mt-3'>Amanda Minorva</h5>
</div>
<img className='w-[5rem] ml-[2rem] object-contain' src={Blog3} alt = "fitness woman" />  
</div>


<div className='flex flex-row mt-10'>
<div className='flex flex-col max-w-[300px]'>
<h3 className='flex-1 font-Montserrat font-bold ss:text-[18px] text-[13px] text-black ]'>Create engaging online courses your student.</h3>
<h5 className='felx mt-3'>Taylor Barbiery</h5>
</div>
<img className='w-[5rem] ml-[2rem] object-contain' src={Blog4} alt="fitness woman" />
</div>


                          <div className='flex flex-row mt-10'>
                              <div className='flex flex-col max-w-[300px]'>
                                  <h3 className='flex-1 font-Montserrat font-bold ss:text-[18px] text-[13px] text-black ]'>The ultimate formula for launching online course.</h3>
                                  <h5 className='felx mt-3'>Ashley William</h5>
                              </div>
                              <img className='w-[5rem] ml-[2rem] object-contain' src={Blog5} alt="fitness woman" />
                          </div>



                          <div className='flex flex-row mt-10'>
                              <div className='flex flex-col max-w-[300px]'>
                                  <h3 className='flex-1 font-Montserrat font-bold ss:text-[18px] text-[13px] text-black ]'>How to sell digital products using social media.</h3>
                                  <h5 className='felx mt-3'>Amanda Minorva</h5>
                              </div>
                              <img className='w-[5rem] ml-[2rem] object-contain' src={Blog6} alt="fitness woman" />
                          </div>





</div>
</div>





        </div>
    </div>
    </section>
  )
}

export default Blog