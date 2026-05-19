import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation()

    const items = t('services.items', { returnObjects: true }) as {
        title: string
        text: string
    }[]

    return (
        <section id="services" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            <div className="mb-14 text-center">

                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    {t('services.titleSmall')}
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    {t('services.title')}
                </h2>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                {items.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-3xl bg-[#111111] border border-[#1d1d1d] p-8 hover:border-[#C9A227]/40 transition-all duration-300 hover:-translate-y-1"
                    >

                        <h3 className="text-2xl mb-5 text-[#F3F3F3] leading-tight">
                            {item.title}
                        </h3>

                        <p className="text-[#b8b8b8] leading-relaxed">
                            {item.text}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}