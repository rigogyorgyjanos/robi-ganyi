type VideoItem = {
    title: string
    url: string
    indexImage: string
}

type VideosProps = {
    videos: VideoItem[]
}

export default function Videos({ videos }: VideosProps) {
    return (
        <section id="videos" className="max-w-7xl mx-auto px-5 py-20 md:py-32">
            <div className="mb-14 text-center">
                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    Videók
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    Előadások
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {videos.map((video) => (
                    <a
                        key={video.url}
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-3xl overflow-hidden border border-[#1d1d1d] bg-[#111111] hover:border-[#C9A227]/40 transition-colors"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                // src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
                                src={video.indexImage}
                                alt={video.title}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl mb-3">{video.title}</h3>
                            <p className="text-[#C9A227]">Megtekintés YouTube-on →</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}