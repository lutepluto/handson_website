module.exports = {
    plugins: [
        require('autoprefixer')({
            flexbox: true,
            browsers: ['>= 0.5%', 'ie >= 10']
        })
    ]
}