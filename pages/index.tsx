import { Inter } from 'next/font/google'
import Description from '../components/ProjectDescription'
import Gallery from '@/components/Gallery'
import { useStore } from "@/components/State";
import DescriptionENG from '@/components/ProjectDescriptionENG';

interface languagesState {
  language: string,
}
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const language = useStore((state: languagesState) => state.language);
  return (
    <main
      className={`flex min-h-screen flex-col justify-center px-5 sm:px-10 py-20 md:px-24 bg-gradient-to-br from-white via-white to-green-800/30  ${inter.className}`}
    >
     {language === "hun" ? <Description/> : <DescriptionENG/>} 
      <Gallery/>
    </main>
  )
}
