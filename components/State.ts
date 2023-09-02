import {create} from 'zustand';

export const useStore = create<any>((set: any) => ({
  open: false,
  setOpen: (openNavigation: boolean)=> set({ open: openNavigation }),
  language: "hun",
  setLanguage: (languageIncoming: string)=> set({ language: languageIncoming })
}));