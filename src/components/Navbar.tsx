import { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi"
import { IoClose } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const { t, i18n } = useTranslation()

    const [open, setOpen] = useState(false)

    const links = [
        { href: '#about', label: t('navbar.about') },
        { href: '#services', label: t('navbar.services') },
        { href: '#videos', label: t('navbar.videos') },
        { href: '#teaching', label: t('navbar.teaching') },
        { href: '#contact', label: t('navbar.contact') },
    ]

    const currentLang = location.pathname.startsWith('/en') ? 'en' : 'hu'

    const switchLang = (lang: 'hu' | 'en') => {
        i18n.changeLanguage(lang)

        const path = location.pathname.replace(/^\/(hu|en)/, '')
        navigate(`/${lang}${path}`)
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-[#1c1c1c]">

                {/* TOP BAR */}
                <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

                    <h1 className="text-[#C9A227] text-lg md:text-xl tracking-[0.2em] uppercase">
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

                    {/* Mobile open */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[#C9A227] text-3xl"
                    >
                        <HiOutlineMenu />
                    </button>


                    {/* DESKTOP LANG SWITCH */}
                    <div className="items-center gap-3 ml-6 border-l border-[#2a2a2a] pl-6 hidden md:flex ">
                        <button
                            onClick={() => switchLang('hu')}
                            className={`text-sm transition ${currentLang === 'hu'
                                ? 'text-[#C9A227]'
                                : 'text-[#d5d5d5] hover:text-[#C9A227]'
                                }`}
                        >
                            HU
                        </button>

                        <span className="text-[#444]">|</span>

                        <button
                            onClick={() => switchLang('en')}
                            className={`text-sm transition ${currentLang === 'en'
                                ? 'text-[#C9A227]'
                                : 'text-[#d5d5d5] hover:text-[#C9A227]'
                                }`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            {open && (
                <div className="fixed inset-0 z-100">

                    <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" />

                    <div className="relative h-full flex flex-col">

                        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
                            <h1 className="text-[#C9A227] tracking-[0.2em] uppercase">
                                Ganyi Róbert
                            </h1>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-white text-3xl"
                            >
                                <IoClose />
                            </button>
                        </div>

                        {/* LINKS */}
                        <div className="flex-1 flex flex-col items-start gap-6 px-3 py-8">
                            {/* LABEL */}
                            <p className="text-xs uppercase tracking-[0.3em] text-[#777]">
                                {t('navbar.menu')}
                            </p>

                            {links.map((link, index) => (
                                <div key={link.href} className="flex flex-col items-center">
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-2xl text-white hover:text-[#C9A227] transition uppercase"
                                    >
                                        {link.label}
                                    </a>

                                    {index !== links.length - 1 && (
                                        <div className="mt-3 h-0.5 w-24 bg-linear-to-r from-transparent via-[#C9A227]/20 to-transparent" />
                                    )}
                                </div>
                            ))}

                            {/*  MOBILE LANG SWITCH */}
                            <div className="mt-10 flex flex-col items-center gap-3">

                                {/* LABEL */}
                                <p className="text-xs uppercase tracking-[0.3em] text-[#777]">
                                    {t('navbar.lang')}
                                </p>

                                {/* SWITCH */}
                                <div className="flex items-center gap-3 text-lg">

                                    <button
                                        onClick={() => {
                                            switchLang('hu')
                                        }}
                                        className={`transition ${currentLang === 'hu'
                                            ? 'text-[#C9A227]'
                                            : 'text-white'
                                            }`}
                                    >
                                        HU
                                    </button>

                                    <span className="text-[#444]">/</span>

                                    <button
                                        onClick={() => {
                                            switchLang('en')
                                        }}
                                        className={`transition ${currentLang === 'en'
                                            ? 'text-[#C9A227]'
                                            : 'text-white'
                                            }`}
                                    >
                                        EN
                                    </button>

                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-5 border-t border-white/10 flex gap-3">

                            <a
                                href="tel:+36702295790"
                                className="flex-1 flex items-center justify-center gap-2 bg-[#C9A227] text-black py-4 rounded-2xl font-semibold"
                            >
                                <FiPhone />
                                {t('navbar.call')}
                            </a>

                            <a
                                href="https://m.me/robi.ganyi"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 border border-[#C9A227] text-white py-4 rounded-2xl"
                            >
                                <FaFacebookMessenger />
                                {t('navbar.chat')}
                            </a>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}