"use client";
import { useState } from 'react'
import Image from 'next/image'
import profilePicture from '../../public/profilePicture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'
import s from './page.module.css'
import clsx from 'clsx';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={s.font}>
      <div className={clsx('min-h-screen bg-white font-poppins', darkMode ? "bg-gray-900" : "" )}>
        <div className={clsx('p-2 text-right', darkMode ? "text-white" : "")}><FontAwesomeIcon icon={faMoon} className='cursor-pointer' height={30} width={30} onClick={()=> setDarkMode(!darkMode
      )}/></div>
        <div className="text-center pt-6 pb-4 px-10">
        <h1 className={clsx('text-3xl py-2 text-teal-600 font-medium  md:text-4xl', darkMode ? "text-teal-400" : "")}>Candela Romero</h1>
        <h2 className={clsx('text-xl py-2 md:text-2xl', darkMode ? "text-white" : "")}>Systems engineering student</h2>
        <p className={clsx('text-md pt-5 leading-8 text-gray-800 max-w-xl mx-auto md:text-xl', darkMode ? "text-gray-200" : "")}>Im a responsible and organized woman. What I enjoy most about programming is having to learn new things constantly and to be up to date with latest technologies. I thrive on taking on new challenges.</p>
      </div>
    
    <div className={clsx('relative w-80 mx-auto border-2 border-teal-600 rounded-full', darkMode ? "border-teal-400" : "")}>
    <Image src={profilePicture} alt='profilePicture' className='overflow-clip rounded-full'/>
    </div><div className={clsx('text-md text-center pt-4 text-gray-600', darkMode ? "text-gray-400" : "" )}>
      <Link href='https://www.linkedin.com/in/candelabromero/'> 
      <div className='flex justify-center hover:text-gray-400'>
        <p className='mr-1'>LinkedIn</p> 
        <FontAwesomeIcon icon={faLinkedinIn} width={18} height={18} className='mt-1' />        
      </div> 
     </Link>
    </div>
    </div>
</div>
  )
}
