'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false)
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => setMounted(true), [])


    return (
        <div>
            {
                mounted && (
                    currentTheme === 'dark' ?
                        <MdDarkMode onClick={() => setTheme('light')} className="text-xl hover:text-yellow-200 cursor-pointer" />
                        :
                        <MdOutlineLightMode onClick={() => setTheme('dark')} className="text-xl hover:text-yellow-900 cursor-pointer" />
                )
            }

        </div>
    )
}
