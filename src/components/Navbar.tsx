import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { FaFacebookMessenger } from 'react-icons/fa'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { href: '#about', label: 'Bemutatkozás' },
        { href: '#services', label: 'Fellépések' },
        { href: '#videos', label: 'Videók' },
        { href: '#contact', label: 'Kapcsolat' },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#1c1c1c]">

                {/* TOP BAR */}
                <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-[#C9A227] text-lg md:text-xl font-semibold tracking-[0.2em] uppercase">
                        Ganyi Róbert
                    </h1>

                    {/* Desktop menu */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-[#d5d5d5]">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-[#C9A227] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile open button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[#C9A227] text-3xl"
                    >
                        <HiOutlineMenu />
                    </button>
                </div>
            </header>

            {/* ================= MOBILE MENU ================= */}
            {open && (
                <div className="fixed inset-0 z-999">

                    {/* BACKDROP */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />

                    {/* CONTENT */}
                    <div className="relative h-full flex flex-col">

                        {/* TOP BAR */}
                        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                            <span className="text-[#C9A227] tracking-[0.2em] uppercase text-sm">
                                Gányi Róbert
                            </span>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-white text-3xl"
                            >
                                <IoClose />
                            </button>
                        </div>

                        {/* LINKS */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl text-white hover:text-[#C9A227] transition uppercase"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA SECTION */}
                        <div className="p-5 border-t border-white/10 flex gap-3">

                            <a
                                href="tel:+36702295790"
                                className="flex-1 flex items-center justify-center gap-2 bg-[#C9A227] text-black py-4 rounded-2xl font-semibold"
                            >
                                <FiPhone />
                                Hívás
                            </a>

                            <a
                                href="https://m.me/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-[#C9A227] text-white py-4 rounded-2xl"
                            >
                                <FaFacebookMessenger />
                                Chat
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}