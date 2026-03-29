import FoundationNarrative from "./FoundationNarrative";
import { siteCopy } from "./siteCopy";

export default function Description() {
    const copy = siteCopy.hun;

    return (
        <FoundationNarrative
            founderName={copy.founderName}
            founderRole={copy.founderRole}
            quoteLines={copy.quoteLines}
            aimsParagraphs={copy.aimsParagraphs}
        />
    );
}
