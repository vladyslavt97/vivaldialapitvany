"use client"
import { useStore } from "./State";

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
  const language = useStore((state: languagesState) => state.language);

  const styles = "bg-gradient-to-br from-green-800/80 to-green-800/30 rounded-full px-1 shadow-lg border border-green-800";
  const stylesselected = "bg-gradient-to-br from-green-800/40 to-green-800/10 rounded-full px-1 shadow-lg border border-green-800";
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
                <button onClick={hunBio} className={language === "hun" ? styles : stylesselected}>HUN</button>
                <button onClick={engBio} className={language === "eng" ? styles : stylesselected}>ENG</button>
            </div>
    </div>
  )
}