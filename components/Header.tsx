import React from 'react'
import {SocialIcon} from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';
type Props = {
  socials: Social[]
}

export default function Header({socials}: Props) {
  return (
    <header className="flex sticky top-0 p-5 justify-between max-w-7xl mx-auto z-20
    xl:items-center">
        <motion.div 
        initial={
          {
            x: -500,
            opacity: 0,
            scale: 0.5
          }
        }
        animate={
            {
                x: 0,
                opacity: 1,
                scale: 1
            }
        }
        transition={{
            duration: 1.5
        }}
        className="flex flex-row items-center"
        >
        {
          socials.map((social)=>{
            return <SocialIcon 
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            />
          })
        }
        </motion.div>
       
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className="header-right">
            <SocialIcon
            network='email'
            fgColor="gray"
            bgColor="transparent"
            url='#contact'
            />
            <Link href="#contact">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</p>
            </Link>
            
        </motion.div>
        
        


    </header>
  )
}