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
                text: {
                    darker: '#d1d5db',
                    default: '#f3f4f6'
                },
                background: {
                    darker: '#1f2937',
                    default: '#374151'
                }
            },
            zIndex: {
                '-10': '-10',
                '100': '100',
            }
        },

    },
    variants: {
        extend: {
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};