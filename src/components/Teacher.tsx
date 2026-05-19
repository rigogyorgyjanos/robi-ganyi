export default function Teacher() {
    return (
        <section
            id="teaching"
            className="max-w-7xl mx-auto px-5 py-20 md:py-32"
        >
            {/* HEADER */}
            <div className="text-center mb-16">
                <p className="text-[#C9A227] uppercase tracking-[0.3em] text-xs mb-4">
                    Oktatás
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                    Zongoraoktatás
                </h2>
            </div>

            {/* MOBILE */}
            <div className="flex flex-col gap-8 lg:hidden">

                <TeacherCard
                    title="Egyéni oktatás"
                    text="A tanítás során személyre szabott módszerrel dolgozom,
          minden tanuló saját tempójához igazodva."
                />

                <TeacherCard
                    title="Gyerekek és felnőttek"
                    text="Kezdő gyerekekkel is foglalkozom, ahol a cél a zenei alapok
          játékos és motiváló elsajátítása."
                />

                <ImageBlock />

                <TeacherCard
                    title="Jazz & klasszikus alapok"
                    text="A tananyagban a klasszikus technika és a jazz improvizáció
          alapjai egyaránt szerepelnek."
                />
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-center">

                {/* LEFT */}
                <div className="space-y-8">
                    <TeacherCard
                        title="Egyéni oktatás"
                        text="A tanítás során személyre szabott módszerrel dolgozom,
            minden tanuló saját tempójához igazodva."
                    />

                    <TeacherCard
                        title="Gyerekek és felnőttek"
                        text="Kezdő gyerekekkel is foglalkozom, ahol a cél a zenei alapok
            játékos és motiváló elsajátítása."
                    />
                </div>

                {/* CENTER IMAGE */}
                <ImageBlock />

                {/* RIGHT */}
                <div className="space-y-8">
                    <TeacherCard
                        title="Jazz & klasszikus alapok"
                        text="A tananyagban a klasszikus technika és a jazz improvizáció
            alapjai egyaránt szerepelnek."
                    />

                    <TeacherCard
                        title="Inspiráló fejlődés"
                        text="Célom, hogy a tanulás ne csak technikai fejlődés legyen,
            hanem valódi zenei élmény is."
                    />
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
    return (
        <div className="relative rounded-[2rem] overflow-hidden border border-[#1d1d1d] h-[500px]">
            <img
                src="/teaching.jpg"
                alt="Piano teaching"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#F3F3F3] text-xl">
                    Zongoraóra • Fejlesztés • Korrepetálás
                </p>
            </div>
        </div>
    )
}