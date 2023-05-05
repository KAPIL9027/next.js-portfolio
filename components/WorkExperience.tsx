import React from 'react'
import Experience from './Experience'
type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className="h-screen flex
      relative flex-col
    text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px]
    text-gray-500 text-2xl ">Experience</h3>
            
    <div className="w-full mt-[3rem] z-40 relative flex space-x-10 p-10 snap-x snap-mandatory overflow-x-scroll">
        <Experience/>
        <Experience/>
        <Experience/>
    </div>
    </div>
  )
}