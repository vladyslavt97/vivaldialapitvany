import { create } from "zustand";
import type { Language } from "./siteCopy";

type SiteState = {
    language: Language;
    setLanguage: (language: Language) => void;
};

export const useStore = create<SiteState>((set) => ({
    language: "hun",
    setLanguage: (language) => set({ language }),
}));
