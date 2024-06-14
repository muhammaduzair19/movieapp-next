import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <nav className="dark:bg-zinc-900 bg-yellow-500 p-5 flex justify-center gap-4 ">
            <NavbarItem title='Trending' param='fetchTrending' />
            <NavbarItem title='Top Rated' param='fetchTopRated' />
        </nav>
    )
}
