var mongodb = require('mongodb').MongoClient;

//its Works
function Banco(){
    /**
     * establish a connection with data base
     */
    var conn = function(database, callback){
        console.log();
        mongodb.connect('mongodb://192.168.25.160:27017/'+database, function(err, db){
           callback(db); 
        });
    };
    
    //Get all documents inside the collection
    this.findAll = function(document, callback){
        conn('video', function(db){
            db.collection(document).find({}).toArray(function(err, docs){
                if(err) throw('had problems with connection at db');
                callback(docs);                
                db.close();
            });
        });
    };

    //This class method is responsable for insert data inside the collection
    this.insertOne = function(data, document, callback){
        conn('video', function(db){
            var existe =  db.collection(document).find({});
            db.collection(document).insertOne(data, function(err, result){
                if(err) throw('had problems during insertion')
                callback(result);
                db.close();
            });
        });      
    };
}

module.exports = function(){
    return new Banco();
}