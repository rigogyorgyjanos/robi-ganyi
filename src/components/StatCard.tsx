type Props = {
    title: string
    subtitle: string
}

export default function StatCard({ title, subtitle }: Props) {
    return (
        <div className="rounded-3xl border border-[#1d1d1d] bg-[#111111] p-6 min-h-45 flex flex-col justify-between">
            <h3 className="text-4xl md:text-5xl text-[#C9A227] font-light">
                {title}
            </h3>

            <p className="text-[#b8b8b8] leading-relaxed">{subtitle}</p>
        </div>
    )
}