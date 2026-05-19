import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()

    return (
        <section id="about" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* TEXT SIDE */}
                <div>
                    <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-5">
                        {t('about.titleSmall')}
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                        {t('about.title')}
                    </h2>

                    <div className="space-y-6 text-[#c8c8c8] leading-relaxed text-lg">
                        <p>{t('about.text1')}</p>
                        <p>{t('about.text2')}</p>
                        <p>{t('about.text3')}</p>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative rounded-3xl overflow-hidden border border-[#1d1d1d] group">

                    <img
                        src="/about.jpg"
                        alt="Ganyi Róbert jazz pianist"
                        className="w-full h-125 object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[#F3F3F3] text-lg md:text-xl font-light">
                            {t('about.name')}
                        </p>

                        <p className="text-[#C9A227] text-sm tracking-wide">
                            {t('about.role')}
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}