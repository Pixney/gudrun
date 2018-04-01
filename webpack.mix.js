let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('addons/gudrun/pixney/gudrun-theme/resources/js/app.js', 'public/js')
.copy('public/js/app.js', 'addons/gudrun/pixney/gudrun-theme/resources/dist/js')
.sass('addons/gudrun/pixney/gudrun-theme/resources/sass/theme.scss', 'public/css')
.copy('public/css/theme.css', 'addons/gudrun/pixney/gudrun-theme/resources/dist/css');
//'../addons/gudrun/pixney/gudrun-theme/resources/dist/js');
 // .sass('addons/gudrun/pixney/gudrun-theme/resources/sass/theme.scss', '../addons/gudrun/pixney/gudrun-theme/resources/dist/css');


// mix.js('addons/gudrun/pixney/gudrun-theme/resources/js/app.js', 'public/js')
 //   mix.sass('addons/gudrun/pixney/gudrun-theme/resources/sass/theme.scss', '../addons/css');
