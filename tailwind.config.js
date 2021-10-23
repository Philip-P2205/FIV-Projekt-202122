module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{ts,html,scss}',
        ]
    },
    darkMode: 'class', // or 'media' or 'false'
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: {
                        bg: '#282C34',
                        txt: '#F5F6Fa'
                    }
                },
                secondary: {
                    dark: {
                        bg: '#21252B',
                        btn: '#404754',
                        hover: '#4D5565',
                        txt: '#CCCCCC'
                    }
                },
                tertiary: {
                    dark: {
                        bg: '#2C313B',
                        txt: '#9A9B9E'
                    }
                },
                error: '#EB2F06'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};