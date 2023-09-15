import { useStore } from "@/components/State";

type Props = {}
interface languagesState {
  language: string,
}

export default function Copied({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  return (
    <div className="my-1 md:my-2 px-3 bg-blue-700/30 text-center rounded-full text-black absolute top-0 md:w-96">
        <h1>{language === "hun" ? "Másolva" : "Copied"}</h1>
    </div>
  )
}