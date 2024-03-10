import { motion } from "framer-motion";
import Image from "next/image";
import { useStore } from "@/components/State";
import LanguageSwitch from "./LanguageSwitch";

type Props = {};
interface languagesState {
    language: string;
}

export default function Header({}: Props) {
    const language = useStore((state: languagesState) => state.language);

    return (
        <div className="w-full overflow-hidden">
            {/* <motion.div 
          initial={{opacity:0, scale:1, y:-8}}
          animate={{opacity:[0, 1, 0.5], scale:1.15, y:-21}}
          transition={{duration:5}}
          className='sm:hidden '>
          <Image src="/viv.png" width={1000} alt="some" height={1000} className=' absolute -z-10 opacity-30 inset-0 object-cover w-full h-22' priority={true}/>
        </motion.div> */}

            {/* <motion.div 
          initial={{opacity:0, scale:1, y:0}}
          animate={{opacity:[0, 1, 0.3], scale:1, y:-10}}
          transition={{duration:5}}
          className='hidden sm:block'>
          <Image src="/viv.jpeg" width={1000} alt="some" height={1000} className=' absolute -z-10 opacity-30 inset-0 object-cover md:object-top w-full h-22' />
        </motion.div> */}
            <Image
                src="/vivaldilogo.png"
                width={100}
                alt="some"
                height={100}
                loading="eager"
                className="absolute top-1 left-4 md:top-4"
            />
            <LanguageSwitch />

            <div className="text-center h-[70px] sm:py-7 text-2xl font-extrabold text-black bg-green-800/30 flex items-end md:items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 5 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500/90 font-serif text-[15px] md:text-[20px]"
                >
                    {language === "hun"
                        ? "Vivaldi Alapítvány a jövő művészeiért"
                        : "Vivaldi Foundation for the artists of the future"}
                </motion.h1>
            </div>
        </div>
    );
}
