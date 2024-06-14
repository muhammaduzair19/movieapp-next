import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US`, {
    next: { revalidate: 10000 }
  })
  if (!res.ok) throw new Error('something went wrong');
  const data = await res.json();
  const results = data.results;

  return (
    <Results results={results} />
  )
}

export default Home