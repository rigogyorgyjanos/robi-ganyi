import { useTranslation } from 'react-i18next'

type ReferencesProps = {
    references: string[]
}

export default function References({ references }: ReferencesProps) {
    const { t } = useTranslation()

    return (
        <section className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            <div className="text-center mb-14">

                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    {t('references.titleSmall')}
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    {t('references.title')}
                </h2>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {references.map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-[#1d1d1d] bg-[#111111] px-6 py-10 text-center text-[#d6d6d6] text-lg hover:border-[#C9A227]/40 transition-colors"
                    >
                        {item}
                    </div>
                ))}

            </div>
        </section>
    )
}