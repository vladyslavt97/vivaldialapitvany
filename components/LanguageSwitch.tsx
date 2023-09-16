"use client"
import { useEffect, useState } from "react";
import { useStore } from "./State";
import { easeInOut, motion } from "framer-motion";

type Props = {}
interface languagesState {
  setLanguage: (language: string) => void;
  language: string,
}

interface openState {
    open: false;
  setOpen: (open: boolean) => void;
}

export default function LanguageSwitch({}: Props) {
  const [loaded, setLoaded] = useState(false);
  const language = useStore((state: languagesState) => state.language);


  useEffect(() => {
    const browserLanguage = navigator.language;
    setLoaded(true);
    if(browserLanguage.includes("hu")){
      setLanguage("hun");
    } else {
      setLanguage('eng');
    }
  }, []);

  const styles = "bg-gradient-to-br from-blue-800/80 to-blue-800/30 rounded-full px-1 shadow-lg border border-blue-600";
  const stylesselected = "bg-gradient-to-br from-blue-800/40 to-blue-800/0 rounded-full px-1 shadow-lg border border-blue-600";
  const engBio = () => {
    setLanguage('eng');
  }
 
  const hunBio = () => {
    setLanguage('hun')
  }
 
  const setLanguage = useStore((state: languagesState) => state.setLanguage);
  const open = useStore((state: openState) => state.open);

  return (
    <div className={`absolute left-1 md:left-8 top-1 sm:top-5 ${open ? "z-10" : "z-50"}`}>
      {loaded && 
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, ease: "easeIn"}}
            className="flex flex-row sm:flex-col md:flex-row gap-1 md:gap-3 text-white font-extralight text-sm">
                <button onClick={hunBio} className={language === "hun" ? styles : stylesselected}>HUN</button>
                <button onClick={engBio} className={language === "eng" ? styles : stylesselected}>ENG</button>
            </motion.div>}
    </div>
  )
}