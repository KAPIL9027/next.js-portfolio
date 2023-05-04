import { motion } from 'framer-motion'
import React from 'react'
motion
// 
type Props = {}

export default function About({}: Props) {
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
    src="https://user-images.githubusercontent.com/76560065/236122578-b071a939-804d-4cd0-9c8c-2a29eb24b96c.jpg"
    className="  
    flex-shrink-0 w-32 h-32 sm:w-56 sm:h-56 mt-[7rem]
    rounded-full object-cover md:rounded-lg md:w-[200px] md:h-[400px]
    xl:w-[300px] xl:h-[400px]"
    />

    <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-[1.5rem] sm:text-3xl font-semibold">Here is a {" "}
        <span className="underline decoration-[#F7AB0A]/50">
        little</span> background</h4>
        <p className="text-sm">
        Aws Certified Cloud Practitioner and full stack web developer 
        with experience in Node.js, 
        React.js, Express.js, MongoDb, 
        JavaScript, HTML, and CSS. 
        I have built several full-stack
         projects including an AI Image
          Generator using OpenAI's API,
           a web chatting application, 
           a To-Do app, and a social media platform. Proficient in Java programming and certified in Java through HackerRank. Strong problem-solving skills with over 550+ solved data structures and algorithms problems on Leetcode. Passionate about learning new technologies and proficient in core computer science subjects including Operating Systems, DBMS, and Software Engineering.
        </p>
    </div>
    </motion.div>
  )
}