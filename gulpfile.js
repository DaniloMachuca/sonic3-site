const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

function imagens() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

function css() {
  return gulp
    .src("src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("dist/styles/css"));
}

function js() {
  return gulp
    .src("src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts/js"));
}

exports.default = gulp.parallel(imagens, css, js);

exports.watch = function () {
  gulp.watch("src/styles/*.scss", css);
  gulp.watch("src/scripts/*.js", js);
};
