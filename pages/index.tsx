import Description from "../components/ProjectDescription";
import Gallery from "@/components/Gallery";
import { useStore } from "@/components/State";
import DescriptionENG from "@/components/ProjectDescriptionENG";

export default function Home() {
    const language = useStore((state) => state.language);

    return (
        <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
            <div className="space-y-8 sm:space-y-10">
                {language === "hun" ? <Description /> : <DescriptionENG />}
                <Gallery />
            </div>
        </div>
    );
}
