import Image from 'next/image'
import { Inter } from 'next/font/google'
import Description from '../components/ProjectDescription'
import Gallery from '@/components/Gallery'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-center px-10 py-20 sm:px-24 ${inter.className}`}
    >
      <Description/>
      <Gallery/>
    </main>
  )
}
