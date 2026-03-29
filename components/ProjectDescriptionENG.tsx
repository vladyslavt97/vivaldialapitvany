import FoundationNarrative from "./FoundationNarrative";
import { siteCopy } from "./siteCopy";

export default function DescriptionENG() {
    const copy = siteCopy.eng;

    return (
        <FoundationNarrative
            founderName={copy.founderName}
            founderRole={copy.founderRole}
            quoteLines={copy.quoteLines}
            aimsParagraphs={copy.aimsParagraphs}
        />
    );
}
