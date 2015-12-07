var express =  require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var env = process.env.ENV_NODE = process.env.ENV_NODE || 'development';

var app = express();

function compile(str, path){
    return stylus(str)
}


app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port' + port + '...');