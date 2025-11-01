/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#13072E',
                    light: '#818CF8',
                    dark: '#4F46E5',
                },
                secondary: '#49007F',
                tertiary: '#B3AAFF',
                background: '#FFFFFF',
                'start-gradient': '#3a0f7a',
                'end-gradient': '#1a0033',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
