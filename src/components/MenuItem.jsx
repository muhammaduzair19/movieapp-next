import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
    return (
        <Link href={address}>
            <Icon className='sm:hidden hover:text-yellow-700'size={20} />
            <p className='hidden sm:block uppercase hover:text-yellow-700 outline-none font-semibold text-lg'>{title}</p>
        </Link>
    )
}
