import { motion } from "framer-motion";
import { useStore } from "@/components/State";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
      className='text-center text-xl font-extrabold text-black'>{language === "hun" ? "Képtár" : "Gallery "}</motion.h1>

      <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      className="z-0"
      >
        {arr.map((a,i)=>(
          <div key={i}>
            <SwiperSlide >
              <Image width={200} height={200} src={`/gallery/${a}.jpg`} alt="photo" className="mx-auto my-5 w-80 h-80 object-contain" priority={true}/>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  )
}