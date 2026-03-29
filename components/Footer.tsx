import { FiCopy } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Copied from "./Copied";
import { useStore } from "@/components/State";
import Image from "next/image";
import { siteCopy } from "./siteCopy";

type SupportFieldProps = {
    label: string;
    value: string;
    onCopy: (value: string) => void;
};

function SupportField({ label, value, onCopy }: SupportFieldProps) {
    return (
        <div className="rounded-[1.35rem] border border-stone-900/10 bg-[#f8f3ea] px-4 py-4 shadow-[0_18px_48px_-42px_rgba(58,46,34,0.38)]">
            <p className="text-sm text-stone-500">{label}</p>
            <div className="mt-2 flex items-start justify-between gap-3">
                <p className="break-all text-[0.98rem] font-medium leading-6 text-stone-900 sm:text-[1.02rem]">
                    {value}
                </p>
                <button
                    type="button"
                    onClick={() => onCopy(value)}
                    className="rounded-full border border-stone-900/10 p-2 text-stone-500 transition-colors duration-200 hover:border-stone-900/20 hover:text-stone-900"
                    aria-label={label}
                >
                    <FiCopy className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

export default function Footer() {
    const language = useStore((state) => state.language);
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<number | null>(null);
    const copy = siteCopy[language];

    useEffect(() => {
        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleCopy = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);

            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                setCopied(false);
            }, 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <footer className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            <section className="rounded-[2rem] border border-stone-900/10 bg-white/80 px-5 py-6 shadow-[0_28px_90px_-58px_rgba(58,46,34,0.42)] backdrop-blur-sm sm:px-8 sm:py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-5">
                        <div className="max-w-2xl space-y-3">
                            {copied ? <Copied label={copy.copiedLabel} /> : null}
                            <p className="text-[1rem] leading-7 text-stone-800 sm:text-[1.08rem] sm:leading-8">
                                {copy.supportIntro}
                            </p>
                        </div>

                        <div className="relative hidden h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-[#ebe3d7] ring-1 ring-stone-900/5 sm:flex">
                            <Image
                                src="/vivaldilogo.png"
                                width={64}
                                height={64}
                                alt="Vivaldi Alapítvány"
                                className="h-11 w-11 object-contain"
                            />
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                        {copy.supportFields.map((field) => (
                            <SupportField
                                key={field.label}
                                label={field.label}
                                value={field.value}
                                onCopy={handleCopy}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </footer>
    );
}
