import { motion } from 'framer-motion'
import React from 'react'
import SkillCard from './SkillCard'
import { Skill } from '@/typings'
type Props = {skills: Skill[]}

export default function Skills({skills}: Props) {
  return (
    < motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    viewport={{once: true}}
    className="h-screen flex
    relative flex-col
  text-left md:flex-row max-w-full 
  justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px]
  text-gray-500 text-2xl ">Skills</h3>
        <h3 className="text-[6px] sm:text-[1rem] absolute top-36 uppercase tracking-[3px]
        text-gray-500 text-sm">
            Hover over a skill for current proficiency
        </h3>

        <div className="mt-[10rem] grid grid-cols-4 gap-4">
          {
            skills.map((skill)=>{
                return <SkillCard key={skill._id} skill={skill}/>
            })
          }
        </div>
    </motion.div>
  )
}