"use client";
import { useState } from 'react'
import Image from 'next/image'
import profilePicture from '../../public/profilePicture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMoon } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link'
import s from './page.module.css'
import clsx from 'clsx';
import html from '../../public/techs/html.png'
import css from '../../public/techs/css.png'
import javascript from '../../public/techs/javascript.png'
import typescript from '../../public/techs/typescript.png'
import react from '../../public/techs/react.png'
import nextjs from '../../public/techs/nextjs.png'
import github from '../../public/techs/github.png'
import tailwind from '../../public/techs/tailwind.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500"

  },
  {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500"

  },
  {
    id: 4,
    src: typescript,
    title: "Typescript",
    style: "shadow-sky-600"

  },
  {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-sky-500"

  },
  {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-400"
  },
  {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400"
  },
  {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400"
  } 

  ]
  
  return (
    <div className={clsx('p-4', s.font, darkMode ? "bg-gray-900" : "bg-white" )}>
        <div className={clsx('p-2 w-full inline-flex justify-end items-center cursor-pointer', darkMode ? "text-white" : "")}
                        onClick={()=> setDarkMode(!darkMode)}>
          {darkMode ? <p>Light mode</p> : <p>Dark mode</p>}
          <FontAwesomeIcon icon={faMoon} height={30} width={30}/>
        </div>
        <div className="text-center pb-4 px-10 sm:pt-6">
          <h1 className={clsx('text-3xl py-2 font-medium  md:text-4xl', darkMode ? "text-teal-400" : "text-teal-600")}>Candela Romero</h1>
          <h2 className={clsx('text-xl py-2 md:text-2xl', darkMode ? "text-white" : "")}>Systems engineering student</h2>
          <p className={clsx('text-md pt-5 leading-8 max-w-xl mx-auto md:text-xl', darkMode ? "text-gray-200" : "text-gray-800")}>Im a responsible and organized woman. What I enjoy most about programming is having to learn new things constantly and to be up to date with latest technologies. I thrive on taking on new challenges.</p>
        </div>
        <div className={clsx('relative w-80 mx-auto border-2 rounded-full', darkMode ? "border-teal-400" : "border-teal-600")}>
          <Image src={profilePicture} alt='profilePicture' className='overflow-clip rounded-full'/>
        </div>
        <div className={clsx('text-center mt-4 flex justify-center gap-x-3 py-3 px-2', darkMode ? "bg-gray-900" : "bg-white")}>
          <div className='hover:scale-110 duration-500 text-blue-700'>
            <Link href='https://www.linkedin.com/in/candelabromero/'> 
              <FontAwesomeIcon icon={faLinkedinIn} width={35} className='h-[35px]' />        
            </Link>
          </div>
          <div className='hover:scale-110 duration-500'>
            <Link href='https://github.com/canderomero17'> 
              <FontAwesomeIcon icon={faGithub} width={35} className='h-[35px]' />        
            </Link>
          </div> 
          <div className='hover:scale-110 duration-500 text-sky-400'>
            <Link href='mailto:caande.romero@gmail.com'> 
              <FontAwesomeIcon icon={faEnvelope} width={35} className='h-[35px]' />        
            </Link> 
          </div> 
        </div>
        <div className='pt-12 px-7'>
        <div>
          <p className={clsx('text-xl border-b-2 p-2 inline', darkMode ? "border-teal-400 text-white" : 'border-teal-600')}> Skills </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pb-8 py-10 px-12 sm:px-0'>          
          {techs.map(({id, src, title, style}) => (
            <div key={id} className={clsx('shadow-md hover:scale-105 duration-500 py-2 rounded-lg', style)}>
                <div className='w-20 h-20 text-center mx-auto relative'>
                <Image src={src} alt='' className='absolute mx-auto' fill />
                </div>
             <p className={clsx('mt-4', darkMode ? 'text-gray-400' : '')}>{title}</p>
            </div>
          ))}
        </div>
       </div>
      
      
    </div>
  )
}
