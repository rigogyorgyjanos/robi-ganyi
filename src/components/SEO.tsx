import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const seoData = {
    hu: {
        title: 'Ganyi Róbert | Jazz Zongoraművész & Tanár',
        description: 'Ganyi Róbert diplomás jazz-zongoraművész, a Liszt Ferenc Zeneművészeti Egyetem végzettje. Fellépések hotelekben, jazz klubokban és exkluzív rendezvényeken. Zongora oktatás kezdőknek és haladóknak.',
        url: 'https://ganyi-robi.hu/hu',
        locale: 'hu_HU',
        lang: 'hu',
    },
    en: {
        title: 'Robert Ganyi | Jazz Pianist & Piano Teacher',
        description: 'Robert Ganyi, graduated jazz pianist from the Liszt Ferenc Academy of Music. Live performances at hotels, jazz clubs and exclusive events. Piano lessons for beginners and advanced students.',
        url: 'https://ganyi-robi.hu/en',
        locale: 'en_GB',
        lang: 'en',
    },
}

export default function SEO() {
    const location = useLocation()
    const lang = location.pathname.startsWith('/en') ? 'en' : 'hu'
    const seo = seoData[lang]

    return (
        <Helmet>
            <html lang={seo.lang} />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content="jazz zongoraművész, zongora oktató, élőzene, jazz klub, Ganyi Róbert, jazz pianist Budapest" />
            <meta name="author" content="Ganyi Róbert" />
            <link rel="canonical" href={seo.url} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content="https://ganyi-robi.hu/og-image.jpg" />
            <meta property="og:locale" content={seo.locale} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content="https://ganyi-robi.hu/og-image.jpg" />
        </Helmet>
    )
}