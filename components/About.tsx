import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'
import {urlForImage} from '../sanity/lib/image'

// 
type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen
    flex flex-col relative 
    text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center
    ">
    <h3 className="absolute top-20 uppercase tracking-[20px]
    text-gray-500 text-2xl">About</h3>

    <motion.img
    initial={{
        x: -200,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{
        x: 0,
        opacity: 1
    }}
    src={urlForImage(pageInfo?.profilePic).url()}
    className="  
    flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 mt-[7rem]
    rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[400px]
    xl:w-[300px] mb-1 xl:h-[400px]"
    />

    <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-[1.2rem] sm:text-3xl font-semibold">Here is a {" "}
        <span className="underline decoration-[#F7AB0A]/50">
        little</span> background</h4>
        <p className="text-sm">
         {pageInfo?.backgroundInformation}
        </p>
    </div>
    </motion.div>
  )
}