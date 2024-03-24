// Fetcher for the wiki entries string from navigation bar entry

export default async function getWikiResults(searchTerm: string) {

        // create search parameters to be used when fetching wikipedia below
        const searchParams = new URLSearchParams({
            action: 'query',
            generator: 'search',
            gsrsearch: searchTerm,
            gsrlimit: '20',
            prop: 'pageimages|extracts',
            exchars: '100',
            exintro: 'true',
            explaintext: 'true',
            exlimit: 'max',
            format: 'json',
            origin: '*',
        })

        const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)

  return (
    response.json()
  )
}
