//** Dynamic page for the result of the naivagation bar */
import getWikiResults from "../../components/search/getWikiResults";
import Item from "../../components/search-term/Item";
import { SearchResult, Result } from "../../types";

type Props = {
  params: {
    searchTerm: string;
  };
};

// Get dynamic metadata
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

// pull in the fetch information and handle the output
export default async function page({ params: { searchTerm } }: Props) {
  // Call function and return API - Async
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  // construct result with the handling that the response could be blank without dumping
  const results: Result[] | undefined = data?.query?.pages;

  //UI formating and iteration through the object results
  const content = (
    <main className="bg-slate-100 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          // Calls the Item.tsx component under the search terms dynamic folder
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
