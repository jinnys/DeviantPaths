const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive');
const webp = require('gulp-webp');

gulp.task('default', ['imgmin', 'imgrwd', 'imgwebp']);

gulp.task('imgmin', () => {
  gulp.src('assets/*')
    .pipe(plumber())
    .pipe(imagemin())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('imgrwd', function () {
  const settings = {
    base: 200,
    quality: 70,
  };

  return gulp.src(['assets/**/*.*',])
    .pipe(plumber())
    .pipe(responsive({
      '**/*.*': [
        {
          width: settings.base * 1,
          rename: { suffix: '-1x' },
          format: 'jpeg',
          progressive: true,
          quality: settings.quality,
        },
        {
          width: settings.base * 2,
          rename: { suffix: '-2x' },
          format: 'jpeg',
          progressive: true,
          quality: settings.quality,
        },
        {
          width: settings.base * 3,
          rename: { suffix: '-3x' },
          format: 'jpeg',
          progressive: true,
          quality: settings.quality,
          withoutEnlargement: false,
        },
      ]
    }))
    .pipe(gulp.dest('rwd'));
});

gulp.task('imgwebp', () =>
  gulp.src('assets/**/*.*')
    .pipe(plumber())
    .pipe(webp())
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(gulp.dest('webp'))
);