import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className="relative h-screen flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]
  text-gray-500 text-2xl ">Projects</h3>

   <div className="relative w-full flex overflow-x-scroll
   overflow-y-hidden snap-x snap-mandatory z-20
   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
   {
    projects.map((project,i)=>{
        return <a target="_blank" href="https://www.netflix.com/in/" rel="noopener noreferrer">
            <div className="w-screen flex-shrink-0 snap-center flex flex-col
        space-y-5 items-center justify-center p-20 md:p-44 h-[40rem]">
            <motion.img
             initial={
                {y:  -200,
                opacity: 0}
            }
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className="w-20 h-20"
            src="https://icon-library.com/images/netflix-icon-transparent/netflix-icon-transparent-29.jpg"/>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl sm:text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case Study {i+1} of {projects.length}:</span> UPS Clone</h4>
                <p className="text-lg text-center md:text-left">
                In this project, I have created a clone of Netflix using only HTML, CSS, and JavaScript. To build a complex movie section, I have used JavaScript DOM and Fetch API, which allows users to play the trailer of a movie or show by just hovering over it.
                </p>
            </div>
        </div>
        </a>
    })
   }
   </div>
  <div className="absolute top-[24%] h-[500px] -skew-y-12 w-full  bg-[#F7AB0A]/10"></div>
  </motion.div>
  )
}

export default Projects