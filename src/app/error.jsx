'use client'

import { useEffect } from "react"


export default function error({ error, reset }) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="flex justify-center flex-col items-center space-y-7 my-2">
            <h1>Something went wrong, please try again.</h1>
            <button
                onClick={(() => reset())}
                className="bg-yellow-500 py-1 px-2 font-bold text-2xl duration-300 hover:rounded-md hover:bg-slate-100 hover:text-yellow-500 cursor-pointer">
                Try Again
            </button>
        </div>
    )
}
