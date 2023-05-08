import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import {urlForImage} from '../sanity/lib/image'

type Props = {
  experience: Experience
}

export default function ExperienceCard({experience}: Props) {
     
  return (
    <article className="flex flex-col rounded-2xl
     items-center space-y-7 flex-shrink-0 bg-[#292929] 
      w-[370px] md:w-[600px] xl:w-[800px] snap-center p-7
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       <motion.img
       initial={{
        opacity: 0,
        y: -100,
       }}
       transition={{
        duration: 1.2
       }}
       whileInView={{opacity: 1,y: 0}
       }
       viewport={{once: true}}
       className="w-24 h-24 rounded-full
       xl:w-[120px] xl:h-[120px] object-contain
       "
       src={urlForImage(experience?.companyImage).url()}
       
       />

       <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-[1.1rem] text-2xl">{experience.company}</p>
        <div className="flex items-center space-x-2 my-2">
          {
            experience?.technologies.map((technology)=>{
              return <img key={technology._id} className="w-10 h-10 rounded-full object-contain"
                     alt="html" src={urlForImage(technology?.image).url()}/>
            })
          }
        </div>
        <p className="uppercase py-5 text-[0.7rem] text-gray-300">{new Date(experience["dateStarted"]).toDateString()} -{" "}
        {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience["dateStarted"]).toDateString()}</p>
        <ul className="list-disc space-y-4 overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/50 ml-5">
          {
            experience?.points.map((point,idx) => {
              return <li key={idx} className="text-[0.6rem] sm:text-[0.7rem]">{point}</li>
            })
          }
        </ul>
        </div>
    </article>
  )
}