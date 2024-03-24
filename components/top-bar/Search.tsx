'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation' // Intelisense will pull in the next/router and cause a mount error


export default function Search() {

    //Add the search and routing variables
    const [search, setSearch] = useState('')
    const router = useRouter()

    // Handle the submission event
    // to find the type of e; onSubmit={ e =>handleSubmit}> ; hover over the e
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }

  return (
    // create a form which has the submission and input functions for user involvement
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder='Search'>
        </input>


        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
            {/* push windows key plus . to see the emojies and gifs in Windows */}
            🎉
        </button>
    </form>
  )
}
