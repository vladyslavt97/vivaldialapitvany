"use client";
import { useEffect, useState } from "react";
import { useStore } from "./State";
import type { Language } from "./siteCopy";

const options: Array<{ label: string; value: Language }> = [
    { label: "HUN", value: "hun" },
    { label: "ENG", value: "eng" },
];

export default function LanguageSwitch() {
    const [isReady, setIsReady] = useState(false);
    const language = useStore((state) => state.language);
    const setLanguage = useStore((state) => state.setLanguage);

    useEffect(() => {
        const browserLanguage = navigator.language.toLowerCase();
        setLanguage(browserLanguage.startsWith("hu") ? "hun" : "eng");
        setIsReady(true);
    }, [setLanguage]);

    if (!isReady) {
        return <div className="h-11 w-[7.25rem]" aria-hidden="true" />;
    }

    return (
        <div className="inline-flex rounded-full border border-stone-900/10 bg-stone-900/[0.03] p-1 shadow-[0_14px_40px_-32px_rgba(58,46,34,0.45)]">
            {options.map((option) => {
                const isActive = option.value === language;

                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => setLanguage(option.value)}
                        aria-pressed={isActive}
                        className={`rounded-full px-4 py-2 text-xs tracking-[0.22em] transition-colors duration-200 sm:text-sm ${
                            isActive
                                ? "bg-stone-900 text-[#f7f2e9]"
                                : "text-stone-600 hover:text-stone-900"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
