import MainFooter from "@/components/MainFooter"
import "./globals.css"
import Providers from "./providers"
import ThemeSwitcher from "./themeSwitcher"
import MainHeader from "@/components/MainHeader"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative min-h-[100%] max-w-[100vw] text-[100%]">
                <Providers>
                    <MainHeader />
                    <ThemeSwitcher />
                    {children}
                    <MainFooter />
                </Providers>
            </body>
        </html>
    )
}
