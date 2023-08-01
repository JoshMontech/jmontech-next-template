"use client"
import { useTheme } from "next-themes"

const Logo = () => {
    const { theme, setTheme } = useTheme()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={67}
            height={44}
            fill="none"
        >
            <path fill="#2ED573" d="M24 3h6v39h-6z" />
            <path
                fill="#0063B1"
                stroke="#000"
                d="m47.5 18.5-5-4.5 13-11.5H63l-15.5 16Z"
            />
            <path
                stroke={theme === "light" ? "#000" : "#fff"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M2.278 26.5C.572 36.541 4.995 42.397 23.5 42.5M30.542 2v40.5H23.5M30.542 2H23.5m7.042 0 12 12M23.5 2v40.5m0-40.5H10.542M64 2 47.542 19l-5-5M64 2h-9L42.542 14M64 2l.542 40.5"
            />
        </svg>
    )
}
export default Logo
