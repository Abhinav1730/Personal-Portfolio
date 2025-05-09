import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-2xl font-semibold'>Introduction</h4>
      <h2 className='text-center text-5xl font-semibold'>About Me</h2>

      <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='Me' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-extralight'>I'm a passionate Full Stack Developer skilled in React, Node.js, and modern web frameworks. I build scalable, user-friendly applications like AIvaMI , ReliefCare and DeepSeek AI Clone, blending strong technical expertise with real-world problem-solving. With internship experience and a focus on full-stack innovation, I thrive on transforming ideas into impactful digital solutions that are efficient, secure, and engaging.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon,iconDark,title,description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500' key={index}>
                  <Image src={icon} alt={title} className='w-8 mt-3 ml-2'/>
                  <h3 className='my-4 font-semibold text-gray-700 ml-1'>{title}</h3>
                  <p className='text-gray-600 text-sm ml-1'>{description}</p>
                </li>
              ))}
            </ul>
            <h4 className='my-6 text-gray-700 font-medium'>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool , index)=>(
                <li key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
