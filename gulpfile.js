const { src, dest, watch, task } = require("gulp");
const concat = require("gulp-concat"),
  gulp = require("gulp"),
  newer = require("gulp-newer"),
  prefix = require("gulp-autoprefixer"),
  babel = require("gulp-babel"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  // sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  plumber = require("gulp-plumber"),
  replace = require("gulp-replace"),
  // imagemin = require("gulp-imagemin"),
  zip = require("gulp-zip");
// clean = () => del(["assets"]);
// purge = require("gulp-css-purge"),
// ftp = require("vinyl-ftp");

const production = !false;

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
    src: "src/assets/imgs/*.*",
    dest: "dist/assets/imgs/",
  },
  html: {
    src: "./index.pug",
    watchSrc: ["src/pug/**/*.pug", "./index.pug"],
    dest: "dist/",
    mainDest: "./",
  },
  css: {
    src: "src/assets/css/main.scss",
    dest: "dist/assets/css",
    watchSrc: "src/assets/css/**/*.scss",
    mainDest: "src/assets/css",
  },
  js: {
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
      .pipe(stop())
      .pipe(notify("HTML production is done successfully!"))
      .pipe(connect.reload());
  } else {
    return src(paths.html.src)
      .pipe(plumber())
      .pipe(pug({ pretty: true }))
      .pipe(concat("index.html"))
      .pipe(dest(paths.html.mainDest))
      .pipe(stop())
      .pipe(notify("HTML is done successfully!"))
      .pipe(connect.reload());
  }
}

function styles() {
  if (production) {
    return src(paths.css.src)
      .pipe(plumber())
      .pipe(init())
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(prefix())
      .pipe(concat("main.css"))
      .pipe(write("."))
      .pipe(stop())
      .pipe(dest(paths.css.dest))
      .pipe(notify("CSS is done successfully!"))
      .pipe(connect.reload());
  } else {
    return src(paths.css.src)
      .pipe(plumber())
      .pipe(sass())
      .pipe(prefix())
      .pipe(concat("main.css"))
      .pipe(dest(paths.css.mainDest))
      .pipe(stop())
      .pipe(notify("CSS is done successfully!"))
      .pipe(connect.reload());
  }
}

function scripts() {
  return src(paths.js.src)
    .pipe(plumber())
    .pipe(init())
    .pipe(babel())
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(write("."))
    .pipe(stop())
    .pipe(dest(paths.js.dest))
    .pipe(notify("javaScript is done successfully!"))
    .pipe(connect.reload());
}

function imageMin() {
  return src(paths.image.src)
    .pipe(plumber())
    .pipe(newer(paths.image.dest))
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(stop())
    .pipe(dest(paths.image.dest))
    .pipe(notify("image minify is done successfully!"))
    .pipe(connect.reload());
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
    .pipe(stop())
    .pipe(dest(paths.publicFiles.dest))
    .pipe(connect.reload());
}

function compressDist() {
  return src(paths.allDistFiles.src)
    .pipe(zip("gulp project.zip"))
    .pipe(dest(paths.allDistFiles.dest))
    .pipe(notify("all dist files are compressed successfully!"));
}

function watchs() {
  gulp.watch(paths.css.watchSrc, styles);
  gulp.watch(paths.html.watchSrc, html);
  gulp.watch(paths.js.src, scripts);
  gulp.watch(paths.image.src, imageMin);
  gulp.watch(paths.publicFiles.src, publicFiles);
}

function connect() {
  server({
    name: "Dev App",
    root: ["./"],
    port: 8000,
    livereload: true,
  });
}

task("compress", () => compressDist());

const build = gulp.series(
  gulp.parallel(styles, scripts, html, imageMin, publicFiles),
  connect
);
exports.compressDist = compressDist;
exports.connect = connect;
exports.watch = watchs;
exports.build = build;
exports.default = build;
