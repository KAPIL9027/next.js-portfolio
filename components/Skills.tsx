import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
type Props = {}

export default function Skills({}: Props) {
  return (
    < motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className="h-screen flex
    relative flex-col
  text-left md:flex-row max-w-full 
  justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]
  text-gray-500 text-2xl ">Skills</h3>
        <h3 className="text-[0.6rem] absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm">
            Hover over a skill for current proficiency
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
        </div>
    </motion.div>
  )
}