export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust this path to match your project structure
        "./public/index.html"
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"],
            },
        },
    },
    plugins: [],
}