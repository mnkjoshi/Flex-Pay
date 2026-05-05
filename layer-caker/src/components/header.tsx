"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import companyLogo from "../../public/logo.png"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image className="h-8 w-auto object-contain" src={companyLogo} alt="company logo" />
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-purple-800 transition">Flex‑Pay</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link className="hover:text-purple-600 transition-colors" href="/flexpaydirect">Direct</Link>
          <Link className="hover:text-purple-600 transition-colors" href="/flexpaysynergy">Synergy</Link>
          <Link className="hover:text-purple-600 transition-colors" href="/posts">Insights</Link>
          <Link className="hover:text-purple-600 transition-colors" href="/bottomheader/aboutus">About</Link>
          <Link className="hover:text-purple-600 transition-colors" href="/studio">Login</Link>
          <Link href="/signup" className="ml-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-purple-500/30">Sign up</Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden container mx-auto mt-2 bg-gray-50/90 backdrop-blur rounded-lg border border-gray-200/50 p-4 mx-6 mb-4">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li><Link href="/flexpaydirect" className="hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>Direct</Link></li>
            <li><Link href="/flexpaysynergy" className="hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>Synergy</Link></li>
            <li><Link href="/posts" className="hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>Insights</Link></li>
            <li><Link href="/bottomheader/aboutus" className="hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/studio" className="hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>Login</Link></li>
            <li><Link href="/signup" className="mt-3 inline-block w-full text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition" onClick={() => setOpen(false)}>Sign up</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}