module.exports = {
    // important: true,
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
                    dark: '#f3f4f6',
                    light: '#111827',
                    lighter: '#1f2937',
                },
                background: {
                    darker: '#1f2937',
                    dark: '#374151',
                    light: '#d1d5db',
                    lighter: '#f3f4f6',
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
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),],
};