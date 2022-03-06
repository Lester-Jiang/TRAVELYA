module.exports = {
    babel:{
        plugins: ['babel-plugin-macros'],
    },
    style:{
        postcssOptions:{
            plugins:[require('tailwindcss'), require('autoprefixer')],
        },
    },
}