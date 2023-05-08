import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import {urlForImage} from '../sanity/lib/image'
type Props = {
  pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text,count] = useTypewriter({
        words: [
           `Hi, The Name's ${pageInfo?.name}`,
           "MERN Stack Developer",
           `Aws Certified Cloud 
           Practitioner`
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className="h-screen flex flex-col
    space-y-8 items-center justify-center
    text-center">
         <BackgroundCircles />
         <img  alt="profile-image"
          src={urlForImage(pageInfo?.heroImage).url()}
          className="relative rounded-full w-32 h-32 mx-auto object-cover"/>
        <div className="z-10">
        <h2 className="text-sm uppercase
        text-gray-500 pb-2 tracking-[15px]">
            {pageInfo?.role}
        </h2>
        <h1 className=" text-[1.1rem] sm:text-5xl font-semibold
        px-10">
        <span>{text}</span>
    <Cursor cursorColor="#F7ABBA"/>
        </h1>
        </div>
        <div className="z-30">
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button  className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button  className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
                            
        </div>
    </div>
   
  )
}