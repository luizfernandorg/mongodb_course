var express = require('express');
var app = express();

var load = require('express-load');
var bodyParser = require('body-parser');

app.use(express.static('./public'));

//Body Parser to handle posts
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

/**
 * In this example loder will get all files in /routes
 */
load('routes').into(app);

/*
* last Configuration
*/

//Load middleware to handle 404 status
app.use(function(req, res, next){
    res.status(400).render('404', {});
});

//Load middleware to handle 500 status
app.use(function(erro, req, res, next){
    if(process.env.NODE_ENV == 'production'){
        res.status(500).render('500', {erro:erro});
    }
});

app.listen(3000, function(){
    console.log('server in operation')
});