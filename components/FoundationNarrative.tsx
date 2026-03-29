type FoundationNarrativeProps = {
    founderName: string;
    founderRole: string;
    quoteLines: string[];
    aimsParagraphs: string[];
};

function FounderAttribution({
    founderName,
    founderRole,
}: Pick<FoundationNarrativeProps, "founderName" | "founderRole">) {
    return (
        <p className="ml-auto max-w-3xl text-right text-sm text-stone-600 sm:text-base">
            <span className="font-display text-[1.75rem] leading-none text-stone-900 sm:text-[2.25rem]">
                {founderName}
            </span>{" "}
            <span>– {founderRole}</span>
        </p>
    );
}

export default function FoundationNarrative({
    founderName,
    founderRole,
    quoteLines,
    aimsParagraphs,
}: FoundationNarrativeProps) {
    return (
        <section className="space-y-8 sm:space-y-10" aria-label={founderName}>
            <article className="rounded-[2rem] border border-stone-900/10 bg-white/80 p-6 shadow-[0_24px_80px_-48px_rgba(58,46,34,0.35)] backdrop-blur-sm sm:p-8 lg:p-10">
                <FounderAttribution
                    founderName={founderName}
                    founderRole={founderRole}
                />

                <blockquote className="mt-6 border-l border-[#c9b79e] pl-5 sm:mt-8 sm:pl-8">
                    <div className="max-w-[70ch] space-y-4 text-[0.98rem] leading-7 text-stone-800 sm:text-[1.08rem] sm:leading-8">
                        {quoteLines.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </blockquote>

                <div className="mt-8 sm:mt-10">
                    <FounderAttribution
                        founderName={founderName}
                        founderRole={founderRole}
                    />
                </div>
            </article>

            <article className="rounded-[1.75rem] border border-stone-900/10 bg-[#faf6ee]/90 p-6 shadow-[0_24px_80px_-54px_rgba(58,46,34,0.3)] sm:p-8 lg:p-10">
                <div className="max-w-[72ch] space-y-5 text-[0.98rem] leading-7 text-stone-800 sm:text-[1.08rem] sm:leading-8">
                    {aimsParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </section>
    );
}
