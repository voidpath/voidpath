module.exports = {
    prefix: '',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'g00': '#121212',
                'g01': '#1e1e1e',
                'g02': '#222222',
                'g03': '#242424',
                'g04': '#272727',
                'g06': '#2c2c2c',
                'g08': '#2e2e2e',
                'g12': '#323232',
                'g16': '#353535',
                'g24': '#383838',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};