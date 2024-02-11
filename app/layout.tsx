import "./globals.css"
import Providers from "./providers"
import MainHeader from "@/components/MainHeader"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="flex h-full w-full">
            <body className="relative flex h-full w-full flex-col">
                <Providers>
                    <MainHeader />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
