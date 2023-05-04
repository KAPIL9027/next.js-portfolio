import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function Experience({}: Props) {
  return (
    <article className="flex flex-col rounded-2xl
     items-center space-y-7 flex-shrink-0 bg-[#292929] 
      w-[500px] md:w-[600px] xl:w-[700px] snap-center p-7
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
       className="w-24 h-24 rounded-full
       xl:w-[120px] xl:h-[120px] object-cover
       object-center"
       src="https://tse1.mm.bing.net/th?id=OIP.keapwBp4MJtaYT695xxj8AAAAA&pid=Api&P=0"
       
       />

       <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl font-light">Software Engineer Intern</h4>
        <p className="font-bold text-[1.2rem] text-2xl mt-1">Ecredit India Pvt. Ltd.</p>
        <div className="flex items-center space-x-2 my-2">
            <img className="w-10 h-10 rounded-full"
            alt="html" src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png"/>
            <img className="w-9 h-9 rounded-full object-contain" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"
            alt="css"/>
            <img className="w-10 h-10 rounded-full object-contain" src="https://pluspng.com/img-png/logo-javascript-png-java-script-js-logo-format-ai-javascript-logo-vector-png-213.png" alt= "javascript"/>
            <img className="w-10 h-10 rounded-full object-contain" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png" alt= "node.js"/>
            <img className="w-10 h-10 rounded-full object-contain" src="https://vectorified.com/images/express-js-icon-20.png" alt= "express.js"/>
            <img className="w-10 h-10 rounded-full object-contain" src="http://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-anything-but-the-simplest-of-web-applications-requires-a-database-to-store-and-serve-content-from-choosing-the-right-database-and-structuring-413.png" alt="mongodb"/>
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...-Ended...</p>
        <ul className="list-disc space-y-4 ml-5">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
        </div>
    </article>
  )
}