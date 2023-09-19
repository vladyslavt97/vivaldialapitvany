import { Inter } from 'next/font/google'
import Description from '../components/ProjectDescription'
import Gallery from '@/components/Gallery'
import { useStore } from "@/components/State";
import DescriptionENG from '@/components/ProjectDescriptionENG';
import { useEffect } from 'react';

interface languagesState {
  language: string,
}
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const language = useStore((state: languagesState) => state.language);
  useEffect(()=>{
        fetch('/api/hello', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => 
                response.json())
            .then((data) => {
            })
            .catch((error) => {
                console.error('Error caught:', error);
            });
    },[])
  return (
    <main
      className={`text-[14px] flex min-h-screen flex-col justify-center px-7 sm:px-10 py-7 md:px-24 bg-blue-900/10 ${inter.className}`}
    >
     {language === "hun" ? <Description/> : <DescriptionENG/>} 
      <Gallery/>
    </main>
  )
}
