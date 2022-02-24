const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['images/*.{jpg,png,gif}'], {
  destination: __dirname + '/images/converted/',
  plugins: [
    imageminWebp({quality: 100})
  ]
}).then(() => {
  console.log('Images optimized');
});