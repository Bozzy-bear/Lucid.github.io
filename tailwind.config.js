const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './static/**/*.{html,js}'
    ],
    darkMode: 'class',
    daisyui: {
        themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
    theme: {
        colors: {
            'posh': '#dca54c'
        },
        extend: {},

    },
    plugins: [require("daisyui"), require('flowbite/plugin')]
}
