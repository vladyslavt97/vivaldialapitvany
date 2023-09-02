import { FiCopy } from 'react-icons/fi';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';
import Copied from './Copied';
import { useStore } from "@/components/State";

type Props = {}
interface languagesState {
  language: string,
}
export default function Footer({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  const [copied, setCopied] = useState(false);

  const toggleCopied = (val: boolean) => {
    setCopied(val);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

    const mystyle = "font-bold"
  return (
    <div className='bg-green-800/30 w-screen px-5 pt-6 pb-4 sm:px-24 sm:py-5 relative bottom-0 text-white text-sm sm:text-md'>
        {copied === true && <Copied/>}
        <h2 className='font-bold'>{language === "hun" ? "Az alapítvány folyamatosan fogadja a támogatásokat az alábbi címen:" : "Donations are welcome by bank transfer; please use the details below:"}</h2>
        <h2 className='pt-2'>{language === "hun" ? "Adószám:" : "Tax number:"} 
          <span className={mystyle}> 19350736-2-13</span>
          <CopyToClipboard text="19350736-2-13">
            <button onClick={e => toggleCopied(true)}><FiCopy className='ml-2 text-gray-400'/></button>
          </CopyToClipboard>
        </h2>
        <h2>{language === "hun" ? "Nyilvántartási szám:" : "Registration number: "} <span className={mystyle}>13-01-0004344</span>
          <CopyToClipboard text="13-01-0004344">
            <button onClick={e => toggleCopied(true)}><FiCopy className='ml-2 text-gray-400'/></button>
          </CopyToClipboard>
        </h2>
        <h2>{language === "hun" ? "Bankszámlaszám:" : "Bank account number: "} <span className={mystyle}>10300002-13421668-00014909</span>
          <CopyToClipboard text="10300002-13421668-00014909">
            <button onClick={e => toggleCopied(true)}><FiCopy className='ml-2 text-gray-400'/></button>
          </CopyToClipboard>
        </h2>
        <h2>{language === "hun" ? "Elérhetőség:" : "Contact: "} <span className={mystyle}>info@vivaldialapitvany.hu</span>
          <CopyToClipboard text="info@vivaldialapitvany.hu">
            <button onClick={e => toggleCopied(true)}><FiCopy className='ml-2 text-gray-400'/></button>
          </CopyToClipboard>
        </h2>

    </div>
  )
}