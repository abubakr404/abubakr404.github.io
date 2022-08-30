const { src, dest, watch, task } = require("gulp");
const concat = require("gulp-concat"),
  connect = require("gulp-connect"),
  gulp = require("gulp"),
  prefix = require("gulp-autoprefixer"),
  babel = require("gulp-babel"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  plumber = require("gulp-plumber"),
  replace = require("gulp-replace"),
  zip = require("gulp-zip");
// imagemin = require("gulp-imagemin"),
// del = require("del");
// newer = require("gulp-newer"),
// clean = () => del(["assets"]);
// purge = require("gulp-css-purge"),
// ftp = require("vinyl-ftp");

const production = false;

const paths = {
  allDistFiles: {
    src: "dist/**/*.*",
    dest: ".",
  },
  publicFiles: {
    src: "public/**/*.*",
    dest: "dist/",
  },
  image: {
    src: "src/assets/images/*.{jpg,jpeg,png,svg}",
    dest: "dist/assets/images/",
  },
  html: {
    src: "src/views/index.pug",
    watchSrc: ["src/views/**/*.pug"],
    dest: "dist/",
    mainDest: "./",
  },
  styles: {
    src: "src/assets/styles/main.scss",
    dest: "dist/assets/styles",
    watchSrc: "src/assets/styles/**/*.{{scss,css}",
    mainDest: "src/assets/styles",
  },
  scripts: {
    src: "src/assets/js/**/*.js",
    dest: "dist/assets/js/",
  },
};

function html() {
  if (production) {
    return src(paths.html.src)
      .pipe(plumber())
      .pipe(pug())
      .pipe(concat("index.html"))
      .pipe(replace("public/", "./"))
      .pipe(replace("/src/assets/", "./assets/"))
      .pipe(dest(paths.html.dest))
      .pipe(plumber.stop())
      .pipe(connect.reload())
      .pipe(notify("HTML production is done successfully!"));
  } else {
    return src(paths.html.src)
      .pipe(plumber())
      .pipe(pug({ pretty: true }))
      .pipe(concat("index.html"))
      .pipe(dest(paths.html.mainDest))
      .pipe(plumber.stop())
      .pipe(connect.reload())
      .pipe(notify("HTML is done successfully!"));
  }
}

function styles() {
  if (production) {
    return src(paths.styles.src, { sourcemaps: true })
      .pipe(plumber())
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(prefix())
      .pipe(concat("style.css"))
      .pipe(plumber.stop())
      .pipe(dest(paths.styles.dest))
      .pipe(connect.reload())
      .pipe(notify("styles in production is done successfully!"));
  } else {
    return src(paths.styles.src)
      .pipe(plumber())
      .pipe(sass())
      .pipe(prefix())
      .pipe(concat("style.css"))
      .pipe(dest(paths.styles.mainDest))
      .pipe(plumber.stop())
      .pipe(connect.reload())
      .pipe(notify("styles is done successfully!"));
  }
}

function scripts() {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(dest(paths.scripts.dest))
    .pipe(notify("javaScript is done successfully!"))
    .pipe(connect.reload());
}

function imagesMin() {
  return src(paths.image.src, { since: gulp.lastRun(images) })
    .pipe(plumber())
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(plumber.stop())
    .pipe(dest(paths.image.dest))
    .pipe(connect.reload())
    .pipe(notify("image minify is done successfully!"));
}

function publicFiles() {
  return src(paths.publicFiles.src)
    .pipe(plumber())
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(plumber.stop())
    .pipe(dest(paths.publicFiles.dest))
    .pipe(connect.reload());
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(["assets"]);
}

function compressDist() {
  return src(paths.allDistFiles.src)
    .pipe(zip("gulp project.zip"))
    .pipe(dest(paths.allDistFiles.dest))
    .pipe(notify("all dist files are compressed successfully!"));
}

function watchs() {
  gulp.watch(paths.styles.watchSrc, styles);
  gulp.watch(paths.html.watchSrc, html);
  gulp.watch(paths.scripts.src, scripts);
  // gulp.watch(paths.image.src, imagesMin);
  // gulp.watch(paths.publicFiles.src, publicFiles);
}

function connecter() {
  server({
    name: "Dev App",
    root: ["src", "dist"],
    port: 2407,
    livereload: true,
  });
}

task("compress", () => compressDist());

const build = gulp.series(gulp.parallel(styles, scripts, html));
exports.compressDist = compressDist;
exports.connect = connecter;
exports.watch = watchs;
exports.build = build;
exports.default = build;
