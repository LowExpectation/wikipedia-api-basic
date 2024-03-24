// Global navigation bar style and declaration

import React from 'react'
import Link from 'next/link'
import Search from './Search'
// import Image from 'next/image'
// import maryPoppins from '/public/mary-poppins-whats-poppin.gif'

export default function Navbar() {
    return (
        // This is for the global banner and it attributes
        <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href='/'> Wiki Poppin </Link>
            </h1>
            <Search />

        </nav>
    )
}
