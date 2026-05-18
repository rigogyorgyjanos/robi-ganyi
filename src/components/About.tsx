export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

                {/* TEXT SIDE */}
                <div>
                    <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-5">
                        Bemutatkozás
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                        Diplomás jazz-zongoraművész
                    </h2>

                    <div className="space-y-6 text-[#c8c8c8] leading-relaxed text-lg">
                        <p>
                            Ganyi Róbert a Liszt Ferenc Zeneművészeti Egyetem jazz-zongora szakán végzett.
                        </p>

                        <p>
                            Fellépéseket vállal szólóban, duóban és különböző zenekari formációkban.
                        </p>

                        <p>
                            Rendszeresen játszik hotelekben, jazz klubokban és exkluzív rendezvényeken.
                        </p>
                    </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative rounded-3xl overflow-hidden border border-[#1d1d1d] group">

                    {/* image */}
                    <img
                        src="/about.jpg"
                        alt="Ganyi Róbert jazz pianist"
                        className="w-full h-125 object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    {/* caption bottom left */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-[#F3F3F3] text-lg md:text-xl font-light">
                            Ganyi Róbert
                        </p>

                        <p className="text-[#C9A227] text-sm tracking-wide">
                            Jazz zongoraművész • Tanár
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}