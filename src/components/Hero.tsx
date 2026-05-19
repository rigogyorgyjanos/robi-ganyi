import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="relative min-h-screen flex items-center px-5 pt-32 pb-20">

            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2000&auto=format&fit=crop"
                    alt="Piano"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-[#0B0B0B]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">

                <p className="uppercase tracking-[0.35em] text-[#C9A227] text-xs md:text-sm mb-6">
                    {t('hero.tagline')}
                </p>

                <h1 className="text-5xl md:text-8xl font-light leading-none mb-6">
                    <span className="block text-[#F3F3F3]">
                        {t('hero.titleFirst')}{' '}
                        <span className="text-[#C9A227]">
                            {t('hero.titleSecond')}
                        </span>
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-[#c5c5c5] text-base md:text-xl leading-relaxed mb-10">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                    <a
                        href="tel:+36702295790"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A227] text-black font-semibold"
                    >
                        {t('hero.ctaCall')}
                    </a>

                    <a
                        href="https://m.me/robi.ganyi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C9A227]"
                    >
                        {t('hero.ctaMessenger')}
                    </a>

                </div>
            </div>
        </section>
    )
}