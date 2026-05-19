import { useTranslation } from 'react-i18next'

type VideoItem = {
    title: string
    url: string
    indexImage: string
    riport?: boolean
}

type VideosProps = {
    videos: VideoItem[]
}

export default function Videos({ videos }: VideosProps) {
    const { t } = useTranslation()

    const normalVideos = videos.filter(v => !v.riport)
    const reportVideos = videos.filter(v => v.riport)

    return (
        <section id="videos" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            {/* HEADER */}
            <div className="mb-14 text-center">

                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    {t('videos.titleSmall')}
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    {t('videos.title')}
                </h2>

            </div>

            {/* NORMAL VIDEOS */}
            <div className="grid md:grid-cols-3 gap-5">

                {normalVideos.map(video => (
                    <VideoCard
                        key={video.url}
                        video={video}
                        cta={t('videos.cta')}
                    />
                ))}

            </div>

            {/* REPORT SECTION */}
            {reportVideos.length > 0 && (
                <div>

                    <div className="mt-24 mb-14 text-center">

                        <h2 className="text-4xl md:text-6xl font-light">
                            {t('videos.reportTitle')}
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-5">

                        {reportVideos.map(video => (
                            <VideoCard
                                key={video.url}
                                video={video}
                                cta={t('videos.cta')}
                            />
                        ))}

                    </div>

                </div>
            )}

        </section>
    )
}

function VideoCard({
    video,
    cta,
}: {
    video: VideoItem
    cta: string
}) {
    return (
        <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl overflow-hidden border border-[#1d1d1d] bg-[#111111] hover:border-[#C9A227]/40 transition-colors"
        >

            <div className="overflow-hidden h-84">
                <img
                    src={video.indexImage}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl mb-3">
                    {video.title}
                </h3>

                <p className="text-[#C9A227]">
                    {cta}
                </p>
            </div>

        </a>
    )
}
