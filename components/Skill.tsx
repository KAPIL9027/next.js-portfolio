import { motion } from 'framer-motion';
import React from 'react'
motion
type Props = {
    directionLeft?: boolean;
};

function Skill({directionLeft}: Props) {
  return (
    <div className="group relative
    flex cursor-pointer">
        <motion.img
        initial={
            {x: directionLeft ? -200 : 200,
            opacity: 0}
        }
        transition={{
            duration: 1
        }}
        whileInView={{opacity: 1, x: 0}}
        src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className="rounded-full border border-gray-500 object-cover
        w-16 h-16 sm:w-24 sm:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opactiy-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 sm:w-24 sm:h-24 rounded-full">
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl sm:text-3xl font-bold text-black opacity-0 group-hover:opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill