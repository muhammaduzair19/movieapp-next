import { ThemeProvider } from "next-themes"

export const Providers = ({ children }) => {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="text-zinc-900 dark:text-slate-200 dark:bg-zinc-950 transition-colors duration-700 select-none min-h-screen">
                {children}
            </div>
        </ThemeProvider>
    )
}
