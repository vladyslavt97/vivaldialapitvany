import { useStore } from "@/components/State";

type Props = {}
interface languagesState {
  language: string,
}

export default function Copied({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  return (
    <div className="my-1 px-3 bg-green-700/60 text-center rounded-full text-black absolute top-0 left-0 flex w-full justify-center items-center">
        <h1>{language === "hun" ? "Másolva" : "Copied"}</h1>
    </div>
  )
}