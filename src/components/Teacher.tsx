import { useTranslation } from 'react-i18next'


export default function Teacher() {
    const { t } = useTranslation()

    const items = t('teacher.items', { returnObjects: true }) as {
        title: string
        text: string
    }[]

    return (
        <section id="teaching" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            {/* HEADER */}
            <div className="text-center mb-16">

                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    {t('teacher.titleSmall')}
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    {t('teacher.title')}
                </h2>

            </div>

            {/* MOBILE */}
            <div className="flex flex-col gap-8 lg:hidden">

                {items.slice(0, 2).map((item) => (
                    <TeacherCard key={item.title} {...item} />
                ))}

                <ImageBlock />

                {items.slice(2).map((item) => (
                    <TeacherCard key={item.title} {...item} />
                ))}

            </div>

            {/* DESKTOP */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-center">

                <div className="space-y-8">
                    {items.slice(0, 2).map((item) => (
                        <TeacherCard key={item.title} {...item} />
                    ))}
                </div>

                <ImageBlock />

                <div className="space-y-8">
                    {items.slice(2).map((item) => (
                        <TeacherCard key={item.title} {...item} />
                    ))}
                </div>

            </div>
        </section>
    )
}
function TeacherCard({
    title,
    text,
}: {
    title: string
    text: string
}) {
    return (
        <div className="rounded-3xl border border-[#1d1d1d] bg-[#111111] p-8">

            <h3 className="text-xl text-[#F3F3F3] mb-4">
                {title}
            </h3>

            <p className="text-[#c8c8c8] leading-relaxed">
                {text}
            </p>

        </div>
    )
}

function ImageBlock() {
    const { t } = useTranslation()

    return (
        <div className="relative rounded-4xl overflow-hidden border border-[#1d1d1d] h-125">

            <img
                src="/teaching.jpg"
                alt="Piano teaching"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">

                <p className="text-[#F3F3F3] text-xl">
                    {t('teacher.imageCaption')}
                </p>

            </div>

        </div>
    )
}