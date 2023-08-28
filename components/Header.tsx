import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='w-full h-20'>
      <motion.div 
          initial={{opacity:0, scale:0.9}}
          animate={{opacity:1, scale:1}}
          transition={{duration:5}}
          className=''>
          <Image src="/viv.jpeg" width={1000} alt="some" height={1000} className=' absolute -z-10 opacity-5 inset-0 object-cover md:object-top w-full h-20' />
      </motion.div>
      <div className='text-center py-7 text-2xl font-extrabold text-black bg-green-800/30'>    

          <motion.h1 
          initial={{opacity:0, scale:0.9}}
          animate={{opacity:1, scale:1}}
          transition={{duration:5}}
          >Vivaldi Alapítvány</motion.h1>
      </div>
    </div>
  )
}