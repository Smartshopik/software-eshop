const mix = require('laravel-mix');
require('laravel-mix-clean');
require('laravel-mix-nunjucks')

mix
.ts('src/assets/scripts/index.ts', '/assets/scripts/')
.sass('src/assets/styles/index.scss', '/assets/styles/')
.njk('src/views/', 'public/', {
    ext: '.html'
})
.copy('src/assets/images/', 'public/assets/images/')
.setPublicPath('public')
.clean();