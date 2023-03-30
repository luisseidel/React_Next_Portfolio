/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    purge: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
            },
        },
    },
    plugins: [],
}
