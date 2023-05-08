import { urlForImage } from '@/sanity/lib/image';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
   
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
   overflow-y-hidden snap-x snap-mandatory z-20 max-h-[35rem] mt-[10rem] md:mt-[7rem]
   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
   {
    projects.map((project,i)=>{
        return <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col
               space-y-5 items-center justify-center p-20 md:p-44  ">
                <a href={project.linkToBuild}>
                <motion.img
             initial={
                {x:  -200,
                opacity: 0}
            }
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{once: true}}
            className=" sm:w-[500px] sm:h-[250px] border cursor-pointer hover:rounded-lg hover:border-[0.15rem] border-[#F7AB0A]"
            src={urlForImage(project?.image).url()} />
                </a>
             <div className=" flex items-center justify-center">
                {
                    project?.technologies.map((technology)=>{
                        return <img className="w-10 h-10 object-contain"key = {technology._id} alt={technology?.title} src={urlForImage(technology?.image).url()}/>
                    })
                }
                </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-[1rem] sm:text-3xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Project {i+1} of {projects.length}:{" "}</span>{project?.title}</h4>
                <p className="text-sm sm:text-[1rem] text-center md:text-left overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/50">
                 {project?.summary}
                </p>
            </div>
        </div>
        
    })
   }
   </div>
  <div className="absolute top-[24%] h-[500px] -skew-y-12 w-full  bg-[#F7AB0A]/10"></div>
  </motion.div>
  )
}

export default Projects