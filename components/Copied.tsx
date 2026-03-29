type CopiedProps = {
    label: string;
};

export default function Copied({ label }: CopiedProps) {
    return (
        <div className="inline-flex rounded-full border border-emerald-900/10 bg-emerald-900/[0.06] px-3 py-1 text-xs tracking-[0.12em] text-stone-700">
            <span>{label}</span>
        </div>
    );
}
