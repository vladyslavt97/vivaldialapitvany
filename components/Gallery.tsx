import { motion } from "framer-motion";
import { useStore } from "@/components/State";

type Props = {}
interface languagesState {
  language: string,
}
export default function Gallery({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  return (
    <div className='mt-20'>
        <motion.h1 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2, delay:1}}
        className='text-center text-xl font-extrabold text-black'>{language === "hun" ? "Képtár" : "Gallery "}</motion.h1>

    </div>
  )
}