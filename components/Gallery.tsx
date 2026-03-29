import Image from "next/image";
import { useStore } from "@/components/State";
import { siteCopy } from "./siteCopy";

const galleryImages = Array.from({ length: 19 }, (_, index) => index + 1);
const loopingGalleryImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
    const language = useStore((state) => state.language);

    return (
        <section className="rounded-[2rem] border border-stone-900/10 bg-white/80 p-4 shadow-[0_24px_80px_-52px_rgba(58,46,34,0.34)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                <h2 className="font-display text-[2rem] leading-none text-stone-900 sm:text-[2.5rem]">
                    {siteCopy[language].galleryTitle}
                </h2>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-12" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-12" />

                <div className="overflow-hidden">
                    <div className="gallery-track flex w-max gap-3 sm:gap-4">
                        {loopingGalleryImages.map((imageNumber, index) => {
                            const isDuplicate = index >= galleryImages.length;

                            return (
                                <figure
                                    key={`${imageNumber}-${index}`}
                                    aria-hidden={isDuplicate}
                                    className="group w-[min(78vw,24rem)] shrink-0 overflow-hidden rounded-[1.35rem] border border-stone-900/8 bg-[#f5f0e7] shadow-[0_18px_48px_-42px_rgba(58,46,34,0.45)] sm:w-[22rem] lg:w-[24rem]"
                                >
                                    <div className="relative aspect-[3/2]">
                                        <Image
                                            src={`/gallery/${imageNumber}.jpg`}
                                            alt=""
                                            fill
                                            sizes="(max-width: 639px) 78vw, (max-width: 1023px) 22rem, 24rem"
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                                        />
                                    </div>
                                </figure>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
