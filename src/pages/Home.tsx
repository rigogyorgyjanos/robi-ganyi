import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import References from '../components/References'
import Videos from '../components/Videos'
import Contact from '../components/Contact'
import SectionDivider from '../components/SectionDiveder'
import Teacher from '../components/Teacher'
import SEO from '../components/SEO'





const videos = [
    {
        title: 'Jazz Performance',
        url: 'https://youtu.be/pzNjH5yb5E8',
        indexImage: "/jazz-performance.jpg",
    },
    {
        title: 'Jazz Duo Session',
        url: 'https://www.youtube.com/watch?v=AEa00twCfmk',
        indexImage: "/live-piano-session.jpg",
    },
    {
        title: 'Solo Jazz',
        url: 'https://www.youtube.com/shorts/GGu7wOCXCDs?feature=share',
        indexImage: "/hotel-performance.jpg",
    },
    {
        title: 'Riport',
        url: 'https://youtu.be/IlzCrIECGFA',
        indexImage: '/riport.jpg',
        riport: true,

    }
]


const references = [
    'Müpa',
    'New York Café',
    'Budapest Jazz Club',
    'Spoon The Boat',
    'VeszprémFest',
    'IF Cafe Jazz Club',
]

export default function Home() {


    return (
        <div className="bg-[#0B0B0B] text-[#F3F3F3] min-h-screen overflow-x-hidden selection:bg-[#C9A227] selection:text-black">
            <SEO />
            <Navbar />

            <main>
                <Hero />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Services />
                <SectionDivider />
                <References references={references} />
                <SectionDivider />
                <SectionDivider />
                <Videos videos={videos} />
                <Teacher />
                <SectionDivider />
                <Contact />
            </main>

            <footer className="border-t border-[#1f1f1f] py-10 text-center text-sm text-[#888]">
                © {new Date().getFullYear()} Ganyi Róbert • Jazz Zongoraművész
            </footer>
        </div>
    )
}
