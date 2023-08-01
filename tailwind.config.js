/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
    return ({ opacityValue }) =>
        opacityValue
            ? `rgba(var(--${variable}), ${opacityValue})`
            : `rgb(var(--${variable}))`
}

const textColor = {
    primary: generateColorClass("text-primary"),
    secondary: generateColorClass("text-secondary"),
    tertiary: generateColorClass("text-tertiary"),
    accent: generateColorClass("text-accent"),
}

const backgroundColor = {
    primary: generateColorClass("bg-primary"),
    secondary: generateColorClass("bg-secondary"),
    tertiary: generateColorClass("bg-tertiary"),
    accent: generateColorClass("bg-accent"),
}

const borderColor = {
    primary: generateColorClass("bg-primary"),
    secondary: generateColorClass("bg-secondary"),
    tertiary: generateColorClass("bg-tertiary"),
    accent: generateColorClass("bg-accent"),
}

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            textColor,
            backgroundColor,
            borderColor,
        },
    },
    plugins: [],
}
