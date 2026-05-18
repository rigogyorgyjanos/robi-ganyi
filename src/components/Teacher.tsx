export default function Teacher() {
    return (
        <section id="teaching" className="max-w-7xl mx-auto px-5 py-20 md:py-32">

            <div className="text-center mb-14">
                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    Oktatás
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    Zongoraoktatás
                </h2>
            </div>

            {/* GRID: text text image text */}
            <div className="grid md:grid-cols-4 gap-8 items-start">

                {/* 1 */}
                <div className="space-y-4 text-[#c8c8c8] leading-relaxed">
                    <h3 className="text-xl text-[#F3F3F3]">
                        Egyéni oktatás
                    </h3>
                    <p>
                        A tanítás során személyre szabott módszerrel dolgozom,
                        minden tanuló saját tempójához igazodva.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-4 text-[#c8c8c8] leading-relaxed">
                    <h3 className="text-xl text-[#F3F3F3]">
                        Gyerekek és felnőttek
                    </h3>
                    <p>
                        Kezdő gyerekekkel is foglalkozom, ahol a cél a zenei alapok
                        játékos és motiváló elsajátítása.
                    </p>
                </div>

                {/* IMAGE */}
                <div className="relative rounded-3xl overflow-hidden border border-[#1d1d1d] h-80 md:h-auto">
                    <img
                        src="/teaching.jpg"
                        alt="Piano teaching"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[#F3F3F3] text-sm">
                            Korrepetálás • Zongoraóra • Fejlesztés
                        </p>
                    </div>
                </div>

                {/* 4 */}
                <div className="space-y-4 text-[#c8c8c8] leading-relaxed">
                    <h3 className="text-xl text-[#F3F3F3]">
                        Jazz & klasszikus alapok
                    </h3>
                    <p>
                        A tananyagban a klasszikus technika és a jazz improvizáció
                        alapjai egyaránt szerepelnek.
                    </p>
                </div>

            </div>
        </section>
    )
}