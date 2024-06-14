'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
    const seacrchParams = useSearchParams()
    const genre = seacrchParams.get('genre')
    return (
        <div>
            <Link
                href={`/?genre=${param}`}
                className={`font-semibold hover:text-yellow-100 dark:hover:text-yellow-400 
                    ${genre === param ? 'underline underline-offset-8 rounded-full decoration-yellow-800 dark:decoration-slate-300' : ''}`}>

                {title}
            </Link>
        </div>
    )
}
