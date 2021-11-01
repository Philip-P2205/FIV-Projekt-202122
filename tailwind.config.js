module.exports = {
    important: true,
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{ts,html,css}',
        ]
    },
    darkMode: 'class', // or 'media' or 'false'
    theme: {
        extend: {
            colors: {
                gray: {
                    darker: '#1e272e',
                    dark: '#2f3542',
                    default: '#353b48',
                    light: '#535c68'
                },
                text: {
                    default: '#f5f6fa'
                }
            }
        },
    },
    variants: {
        extend: {
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};