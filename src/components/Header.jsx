import MenuItem from "./MenuItem";
import { ImHome } from "react-icons/im";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-2">
            <div className="flex gap-3">
                <MenuItem title='Home' address='/' Icon={ImHome} />
                <MenuItem title='About' address='/about' Icon={BsFillInfoSquareFill} />
            </div>
            <div className="flex items-center gap-4">
                <DarkModeSwitch />
                <Link href={'/'} className="flex items-center gap-1">
                    <span className="bg-yellow-300 py-1 px-2 font-bold text-2xl">Movies</span>
                    <span className="sm:hidden font-sans font-semibold text-xl">Db</span>
                    <span className="hidden sm:inline-block text-xl">Database</span>
                </Link>
            </div>
        </div>
    )
}
