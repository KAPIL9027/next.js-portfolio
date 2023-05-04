import React from 'react'
import Experience from './Experience'
type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div className="h-screen flex
    relative overflow-hidden flex-col
    text-left md:flex-row max-w-full px-10
    justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px]
    text-gray-500 text-2xl">Experience</h3>
            
    <div>
        <Experience/>
        <Experience/>
        <Experience/>
    </div>
    </div>
  )
}