import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    < motion.div 
     initial={{
        opacity: 0,
     }}
     animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"]
     }}
     transition={{
        delay: 2.5
     }}
    className="relative flex justify-center items-center">
        <div className="border border-[#333333]
        rounded-full h-[200px] w-[200px] 
        animate-ping absolute mt-52"/>
        <div className="border border-[#333333]
        rounded-full h-[300px] w-[300px]
        absolute mt-52
        "/>
        <div className="border border-[#333333]
        rounded-full h-[400px] w-[400px] 
        absolute mt-52
        "/>
        <div className="border border-[#F7AB0A]
        rounded-full h-[500px] w-[500px] opacity-20 
        absolute mt-52
        animate-pulse"/>
        <div className="border border-[#333333]
        rounded-full h-[600px] w-[600px] 
        absolute mt-52
        "/>
    </motion.div>
  )
}

export default BackgroundCircles