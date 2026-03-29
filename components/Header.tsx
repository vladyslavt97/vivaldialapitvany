import Image from "next/image";
import { useStore } from "@/components/State";
import LanguageSwitch from "./LanguageSwitch";
import { siteCopy } from "./siteCopy";

export default function Header() {
    const language = useStore((state) => state.language);

    return (
        <header className="mx-auto w-full max-w-5xl px-4 pt-5 sm:px-6 sm:pt-8 lg:px-8">
            <div className="rounded-[2rem] border border-stone-900/10 bg-white/75 px-5 py-5 shadow-[0_28px_90px_-54px_rgba(58,46,34,0.38)] backdrop-blur-sm sm:px-7 sm:py-7">
                <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="flex items-start justify-between gap-4">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#ebe3d7] ring-1 ring-stone-900/5 sm:h-20 sm:w-20">
                            <Image
                                src="/vivaldilogo.png"
                                width={96}
                                height={96}
                                alt="Vivaldi Alapítvány"
                                priority
                                className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                            />
                        </div>

                        <LanguageSwitch />
                    </div>

                    <h1 className="max-w-3xl font-display text-[2rem] leading-[0.94] tracking-[0.01em] text-stone-900 sm:text-[3rem] lg:text-[3.75rem]">
                        {siteCopy[language].title}
                    </h1>
                </div>
            </div>
        </header>
    );
}
