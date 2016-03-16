var banco = require('../config/db')();

module.exports = function(app){
    app.get('/', function(req, res){
        banco.findAll('movies', function(dados){
            var mydados = dados;
            mydados.sort(function(a,b){
                return b.year - a.year;
            });
            
            res.format({
              html: function(){res.render('index', {dados:mydados, mensagem:''})},
              json: function(){res.send(dados)}
            });
        });
    });
    
    app.post('/create',function(req, res){
        var data = req.body;
       banco.insertOne(data,'movies', function(result){
          res.format({
              html: function(){
                  res.redirect('/')
                },
              json:  function(){
                  res.send({mensage:'create with success'})
                              }
            });
       });
    });
    
    app.post('/update', function(req, res){
        var film = req.body._id;
        res.format({
            html: function(){res.render('update', {})},
            json: function(){res.send(data)}
        });
    });
};