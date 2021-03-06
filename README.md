# ToDo-app ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

A simple vanilla JavaScript to-do app styled with SASS; compiled with Gulp.

 ## Installation

### Requirements
* sass 
* gulp 
* gulp-sass

`npm i sass`
`npm i gulp`
`npm i gulp-sass`


## Usage

Create a gulpfile.js in the root of your project directory. e.g

```javascript 
var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'assets/styles/scss/**/*.scss',
    cssDest = 'assets/styles/css/';

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
  gulp.watch(sassFiles,['styles']);
});
```
Then run 'gulp watch' in the console as for the above example.

follow README from [gulp-sass][1] 

[1]: https://github.com/dlmanning/gulp-sass/blob/master/README.md

<!--
```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Development
```
$ virtualenv foobar
$ . foobar/bin/activate
$ pip install -e .
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/) -->
