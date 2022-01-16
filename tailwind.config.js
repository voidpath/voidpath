module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': 'Inter, Segoe UI, sans-serif',
        },
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
                
                'w00': '#ffffff',
                'w01': '#fbfbfb',
                'w02': '#f7f7f7',
                'w03': '#f3f3f3',
                'w04': '#efefef',
                'w06': '#e7e7e7',
                'w08': '#dedede',
                'w12': '#e1e1e1',
                

                'd00-w': '#88888844',
                'd01-w': '#aaaaaa44',
                'd02-w': '#cccccc44',
                
                'd00': '#222222aa',
                'd01': '#252525',
                'd02': '#333333',


                'pr-main': '#5367cf',
                'pr-text': '#7485df',

                'pr-body-op-min': '#5367cf10',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};