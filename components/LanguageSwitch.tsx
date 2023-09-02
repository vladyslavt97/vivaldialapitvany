"use client"
import { useStore } from "./State";

type Props = {}
interface languagesState {
  setLanguage: (language: string) => void;
}

interface openState {
    open: false;
  setOpen: (open: boolean) => void;
}

export default function LanguageSwitch({}: Props) {
  const styles = "bg-gradient-to-br from-green-800/80 to-green-800/30 rounded-full px-1 shadow-lg"
  const engBio = () => {
    setLanguage('eng');
  }
 
  const hunBio = () => {
    setLanguage('hun')
  }
 
  const setLanguage = useStore((state: languagesState) => state.setLanguage);
  const open = useStore((state: openState) => state.open);
  return (
    <div className={`absolute left-2 md:left-8 top-5 ${open ? "z-10" : "z-50"}`}>
            <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-white font-extralight text-sm">
                <button onClick={hunBio} className={styles}>HUN</button>
                <button onClick={engBio} className={styles}>ENG</button>
            </div>
    </div>
  )
}