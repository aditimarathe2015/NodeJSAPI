var gulp = require('gulp');
nodemon = require('gulp-nodemon');

gulp.task('default',function()
{
nodemon({
    script :'app.js',
    ext :'js',
    env:{
        port:8000
    },
    ignore:['./node_module/**']
   });
   on:('restart',function()
   {
       console.log('Restarting');
   })

});