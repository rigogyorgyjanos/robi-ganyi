import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import References from '../components/References'
import Videos from '../components/Videos'
import Contact from '../components/Contact'
import SectionDivider from '../components/SectionDiveder'
import Teacher from '../components/Teacher'


const videos = [
    {
        title: 'Jazz Performance',
        url: 'https://youtu.be/acq7ceCx_BE?si=aVXACRV_iBx_6xOS',
        indexImage: "/jazz-performance.jpg",
    },
    {
        title: 'Live Piano Session',
        url: 'https://youtu.be/pzNjH5yb5E8?si=1VDQ1ZHyyN15mKNP',
        indexImage: "/live-piano-session.jpg",
    },
    {
        title: 'Hotel Performance',
        url: 'https://youtu.be/RPN9789oOas?si=RT3NkCFjuYv4d-u2',
        indexImage: "/hotel-performance.jpg",
    },
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
                {/* <SectionDivider />
                <Timeline /> */}
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
