import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function Experience({}: Props) {
  return (
    <article>
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
       className="w-32 h-32 rounded-full
       xl:w-[200px] xl:h-[200px] object-cover
       object-center"
       src="https://tse1.mm.bing.net/th?id=OIP.keapwBp4MJtaYT695xxj8AAAAA&pid=Api&P=0"
       
       />

       <div>
        <h4>Software Engineer Intern</h4>
        <p>Ecredit India Pvt. Ltd.</p>
        <div>
            {/* Tech Stack*/}
            {/* Tech Stack */}
            {/* Tech Stack */}
        </div>
        <p>Started work...-Ended...</p>
        <ul className="list-disc space-y-4 ml-5">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
        </div>
    </article>
  )
}