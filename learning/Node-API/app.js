var express =require('express');
var mongoose = require('mongoose')
var app =express();
var DB = mongoose.connect('mongodb://localhost/BookApi');
var Book =require('./module/bookModule')

var port =process.env.Port ||3000;

var bookrouter =express.Router();
// app.use('./api',Router);

bookrouter.route('/Books')
 .get(function(req,res)
{
    Book.find(function(error,Books)
    {
        if(error)
        
            console.log(error)
        else
        res.json(Books);
    });
    // var responsejson ={hello:'this is my api'};
    // res.json(responsejson);
});
app.use('/api',bookrouter);

//var port = process.env.port|| 3000;

app.get('/',function(req,res){
res.send('Welcome my API');
})

app.listen(port,function(){
    console.log('running on Port :' +port);
})
