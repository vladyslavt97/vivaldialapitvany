import { motion } from "framer-motion";
import { useStore } from "@/components/State";
import Image from "next/image";

import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";

type Props = {}
interface languagesState {
  language: string,
}
export default function Gallery({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    const newArray = [];
    for (let i = 1; i <= 9; i++) {
      newArray.push(i);
    }
    setArr(newArray);
  }, []); 

  
  return (
    <div className='mt-20'>
      <motion.h1 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2, delay:1}}
      className='text-center text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-blue-500/90 font-serif'>{language === "hun" ? "Képtár" : "Gallery "}</motion.h1>

      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="z-0"
      >
        {arr.map((a,i)=>(
            <SwiperSlide key={i}>
              <Image priority={true} width={1000} height={1000} src={`/gallery/${a}.jpg`} alt="photo" className="mx-auto my-5 w-80 h-80 object-contain"/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}