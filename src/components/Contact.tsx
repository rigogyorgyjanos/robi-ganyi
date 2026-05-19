import { useTranslation } from 'react-i18next'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="max-w-5xl mx-auto px-5 py-20 md:py-32">

            <div className="rounded-4xl border border-[#1d1d1d] bg-[#111111] p-8 md:p-16 text-center relative overflow-hidden">

                <div className="absolute inset-0 bg-linear-to-br from-[#C9A227]/10 to-transparent" />

                <div className="relative z-10">

                    <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-5">
                        {t('contact.titleSmall')}
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                        {t('contact.title')}
                    </h2>

                    <p className="max-w-2xl mx-auto text-[#c8c8c8] text-lg leading-relaxed mb-10">
                        {t('contact.description')}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                        <a
                            href="tel:+36702295790"
                            className="w-full md:w-auto px-8 py-4 rounded-full bg-[#C9A227] text-black font-semibold"
                        >
                            {t('contact.phone')}
                        </a>

                        <a
                            href="mailto:ganyirobert@gmail.com"
                            className="w-full md:w-auto px-8 py-4 rounded-full border border-[#C9A227]"
                        >
                            {t('contact.email')}
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}