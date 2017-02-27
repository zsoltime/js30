import gulp from 'gulp';
import del from 'del';
import options from 'gulp-options';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import { init, reload } from 'browser-sync';

const dir = options.has('dir') ? options.get('dir') : null;

if (!dir) {
  console.error('\x1b[41m\x1b[37m%s\x1b[0m', 'Error: Please provide a directory using the --dir argument');
  process.exit();
}

const dist = `./${dir}/dist`;
const sources = {
  pug: [
    `./${dir}/src/pug/**/*.pug`,
    `!./${dir}/src/pug/**/layout.pug`,
  ],
  sass: [
    `./${dir}/src/sass/**/*.s+(a|c)ss`,
    `!./${dir}/src/sass/vendors/**/*`,
  ],
  js: `./${dir}/src/js/**/*.js`,
  img: `./${dir}/src/images/**/*.*`,
};

gulp.task('clean', () => del(dist));

gulp.task('copy', () => (
  gulp.src(sources.img)
    .pipe(gulp.dest(`${dist}/images`))
));

gulp.task('build:html', () => (
  gulp.src(sources.pug)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(dist))
    .pipe(reload({ stream: true }))
));

gulp.task('build:css', () => (
  gulp.src(sources.sass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(postcss( [autoprefixer('last 2 versions')] ))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dist}/css`))
    .pipe(reload({ stream: true }))
));

gulp.task('build:js', () => (
  gulp.src(sources.js)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dist}/js`))
    .pipe(reload({ stream: true }))
));

gulp.task('browser-sync', () => (
  init({ server: { baseDir: dist } })
));

gulp.task('watch', () => {
  gulp.watch([
    sources.pug[0],
    './common/pug/**/*.pug',
  ], ['build:html']);
  gulp.watch([
    sources.sass[0],
    './common/sass/**/*.s+(a|c)ss',
  ], ['build:css']);
  gulp.watch([
    sources.js,
  ], ['build:js']);
});

gulp.task('default', [
  'copy',
  'build:html',
  'build:js',
  'build:css',
  'browser-sync',
  'watch',
]);

// gulp.task('build:dist', ['clean',
//   'copy',
//   'build:html',
//   'build:js',
//   'build:css',
//   'browser-sync',
//   'watch',
// ]);
