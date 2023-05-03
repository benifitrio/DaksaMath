module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'selfmode': '#0F1A20',
                'bglightmode': '#f6f7f8',
                'textlightmode': '#071e3d'
            },
            fontFamily: {
                sans: ['Quicksand', 'sans-serif']
            }
        },
    },
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    plugins: [require("tw-elements/dist/plugin.cjs")],
}