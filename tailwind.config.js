module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{ts,html,scss}',
        ]
    },
    darkMode: 'class', // or 'media' or 'false'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};