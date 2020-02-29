require("dotenv").config();

const path = require("path");
const gulp = require("gulp");
const replace = require("gulp-replace");
const zip = require("gulp-zip");
const del = require("del");
const pkg = require("./package.json")

const mainPKGName = "VerticalTimeLine";

const widgetsFolder = path.join(__dirname, "widgets");

const tmpFolder = path.join(__dirname, "dist", "tmp");
const mpkFolder = path.join(__dirname, "dist", pkg.version);
const dstFolder = path.join(tmpFolder, "mendix", mainPKGName);
const projectFolder = process.env.MX_PROJECT_PATH ? path.join(path.resolve(process.env.MX_PROJECT_PATH), "widgets") : path.join(__dirname, "dist", "project");

const fileNameContainer = "TimelineContainer";
const fileNameElement = "TimelineElement";

const tmpContainerFolder = path.join(widgetsFolder, "container", "dist", "tmp", "widgets");
const tmpElementFolder = path.join(widgetsFolder, "element", "dist", "tmp", "widgets");

// Functions

const clean = () => {
    return del([
        `${tmpFolder}/**/*.*`,
    ], { force: true });
}

const replaceStandalone = () => replace(' (standalone)', '');

const copyWebModelerFiles = () =>
    gulp.src([
        path.join(tmpContainerFolder, `${fileNameContainer}.webmodeler.js`),
        path.join(tmpElementFolder, `${fileNameElement}.webmodeler.js`)
    ]).pipe(gulp.dest(tmpFolder)).on("error", console.error);

const copyContainerXML = () =>
    gulp.src(
        path.join(tmpContainerFolder, `${fileNameContainer}.xml`)
    ).pipe(replaceStandalone()).pipe(
        replace('mendix.timelinecontainer.TimelineContainer', `mendix.${mainPKGName}.TimelineContainer`)
    ).pipe(gulp.dest(tmpFolder)).on("error", console.error);

const copyElementXML = () =>
    gulp.src(
        path.join(tmpElementFolder, `${fileNameElement}.xml`)
    ).pipe(replaceStandalone()).pipe(
        replace('mendix.timelineelement.TimelineElement', `mendix.${mainPKGName}.TimelineElement`)
    ).pipe(gulp.dest(tmpFolder)).on("error", console.error);

const copyContainerCSSFiles = () =>
    gulp.src([
        path.join(tmpContainerFolder, `mendix/timelinecontainer/ui/${fileNameContainer}.css`),
        // path.join(tmpContainerFolder, `mendix/timelinecontainer/ui/${fileNameContainer}.css.map`),
    ]).pipe(gulp.dest(path.join(dstFolder, "ui"))).on("error", console.error);

const copyWidgetFiles = () =>
    gulp.src([
        path.join(tmpContainerFolder, `mendix/timelinecontainer/${fileNameContainer}.js`),
        path.join(tmpElementFolder, `mendix/timelineelement/${fileNameElement}.js`),
    ]).pipe(gulp.dest(dstFolder)).on("error", console.error);

const copyPackageXML = () =>
    gulp
        .src(path.join(__dirname, "package.xml"))
        .pipe(replace("XXX", pkg.version))
    .pipe(gulp.dest(tmpFolder)).on("error", console.error);

const zipPackage = () =>
    gulp.
        src(path.join(tmpFolder, "**/*"))
        .pipe(zip(`mendix.${mainPKGName}.mpk`))
        .pipe(gulp.dest(mpkFolder)).on("error", console.error);

const cpMPK = () =>
    gulp
        .src(path.join(mpkFolder, `mendix.${mainPKGName}.mpk`))
        .pipe(gulp.dest(projectFolder)).on("error", console.error);



// Tasks

const bundle = gulp.series(clean, gulp.parallel(copyElementXML, copyContainerXML, copyWebModelerFiles, copyWidgetFiles, copyContainerCSSFiles, copyPackageXML), zipPackage, cpMPK);

// Exports

exports.clean = gulp.task("clean", clean);
exports.bundle = bundle;
