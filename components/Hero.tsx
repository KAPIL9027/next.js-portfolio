import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
           "Hi, The Name's Kapil",
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
          src="https://user-images.githubusercontent.com/76560065/235853202-baff50d7-1d4a-4df8-b5cc-50f1aca7b791.png"
          className="relative rounded-full w-32 h-32 mx-auto object-cover"/>
        <div className="z-10">
        <h2 className="text-sm uppercase
        text-gray-500 pb-2 tracking-[15px]">
            CSE Undergrad
        </h2>
        <h1 className=" text-3xl sm:text-5xl font-semibold
        px-10">
        <span className="">{text}</span>
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