/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./modules/**/*.vue",
        "./shared/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        extend: {
            width: {
                110: '110px',
                972: '972px',
                280: '280px'
            },
            backgroundImage: {
                darkThemeImage: 'url("/images/image-bg-circles.png")',
                lightThemeImage: 'url("/images/image-bg-planets.png")'
            },
            colors: {
                blue: '#66EDFF',
                darkBlue: '#4EAAFF',
                purple: '#495EEE',
                lightPurple: '#6C89FF',
                red: '#FF0000',
                lightGrey: '#CDCDCD',
                orange: '#FF8D24',
                green: '#01C120'
            },
            fontSize: {
                32: '32px',
                40: '40px'
            },
            lineHeight: {
                38: '38px',
                48: '48px;'
            },
            borderWidth: {
                1: '1px'
            },
            borderRadius: {
                32: '32px'
            },
            height: {
                60: '60px'
            },
            boxShadow: {
                infoShadow: '0 4px 4px 0 #0000000F'
            }
        }
    },
    plugins: [],
}

