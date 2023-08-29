import { motion } from "framer-motion";

type Props = {}

export default function Gallery({}: Props) {
  return (
    <div className='mt-20'>
        <motion.h1 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2, delay:1}}
        className='text-center text-xl font-extrabold text-black'>Gallery</motion.h1>

    </div>
  )
}