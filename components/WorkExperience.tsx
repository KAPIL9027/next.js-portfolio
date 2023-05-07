import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'
type Props = {
  experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
  return (
    <div className="h-screen flex
      relative flex-col
    text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center
    ">
        <h3 className="absolute top-20 uppercase tracking-[20px]
    text-gray-500 text-2xl ">Experience</h3>
            
    <div className="w-full mt-[5rem] z-40 relative flex space-x-10 p-10 snap-x snap-mandatory overflow-x-scroll
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {
          experiences.map((experience)=>{
             return <ExperienceCard key={experience._id} experience={experience}/>
          })
        }
    </div>
    </div>
  )
}