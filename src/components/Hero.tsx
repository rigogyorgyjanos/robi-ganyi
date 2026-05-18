export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center px-5 pt-32 pb-20">
            <div className="absolute inset-0 ">
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
                    Jazz • Élő Zene • Oktatás
                </p>

                <h1 className="text-5xl md:text-8xl font-light leading-none mb-6">
                    <h1 className="block text-[#F3F3F3]">Ganyi 
                        <span className=" text-[#C9A227] "> Róbert</span>
                    </h1>
                </h1>

                <p className="max-w-2xl mx-auto text-[#c5c5c5] text-base md:text-xl leading-relaxed mb-10">
                    Elegáns élőzene rendezvényekre, hotelekbe, vacsoraestekre és exkluzív eseményekre.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="tel:+36702295790"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A227] text-black font-semibold"
                    >
                        Hívás most
                    </a>

                    <a
                        href="https://m.me/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C9A227]"
                    >
                        Messenger kapcsolat
                    </a>
                </div>
            </div>
        </section>
    )
}
