var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var async = require('async');

// Database Settings
 

// EJS Settings
app.use(bodyParser.urlencoded({
      extended: false
}));

//set static directory:
app.use(express.static(__dirname + '/public'));

//db settings
var connect = mongoose.connect('mongodb://localhost/nationalDex', function(err) {})
var db = mongoose.connection;
db.once('open', function() {
  console.log('db is open')
});


var pokemonOverviewMovesScheme = new mongoose.Schema({
    naturalMoves: Array,
    machineMoves: Array,
    tutorMoves: Array,
    eggMoves: Array
})

var pokemonMovesScheme = new mongoose.Schema({
    name: String,
    url: String,
    learnMethod:String,
    levelLearned: Number
})

var pokemonProfileScheme = new mongoose.Schema({
    height: String,
    catchRate: String,
    eggGroups: Array,
    abilities:Array,
    weight: String,
    genderRation: String,
    hatchSteps: Number,
    evs: String
})

 
var pokemonOverviewScheme = new mongoose.Schema({
    name: String, //done
    number: Number, //done
    types: Array, //done
    stats: Array, //done
    dexEntry: String, //species
    descriptionEntry: String, //species
    pokemonProfile: pokemonProfileScheme, //species
    moves:[pokemonMovesScheme], //done
    speciesURL: String,
    types: Array //done
})

var pokemonOverviewModel = mongoose.model('pokemonOverviewModel', pokemonOverviewScheme );
//pokemonCollection refers to the collection  when coding  pokemonOverview turns into pokemonOverviews  collection name in database

//pokemonCollection.findOne({name:'bulbasaur'}, function(err,pokemon){
//poke
//})
//mongoose.model('tester5', pokemonOverviewStatsScheme)
 


/*function populateDatabase(){
    var options = {
        method: "GET",
        url:'http://pokeapi.co/api/v2/pokemon/7/'
    }
    request(options, function(error, response, body){
        
        var pokemonData = JSON.parse(body);
        /* Populates Pokemon Moves Scheme 
        var pokemonMoveModel = mongoose.model('moveModel',pokemonMovesScheme)
        var pokemonMoveName = pokemonData.moves[0].move.name;
        var pokemonMoveUrl = pokemonData.moves[0].move.url;
        var pokemonMoveLearnMethod = pokemonData.moves[0].version_group_details[0].move_learn_method.name;
        var pokemonMoveLevelLearned = pokemonData.moves[0].version_group_details[0].level_learned_at;
        var pokemonMovesInfo = new pokemonMoveModel({
            name: pokemonMoveName,
            url: pokemonMoveUrl,
            levelLearned: pokemonMoveLevelLearned,
            learnMethod: pokemonMoveLearnMethod
        })
         Populates pokemonOverviewScheme fields that aren't objects or arrays 
        var pokemonOverviewName = pokemonData.name
        var pokemonOverviewNumber = pokemonData.id
        var pokemonOverviewStats = pokemonData.stats
        var pokemonOverviewTypes = pokemonData.types
        var pokemonOverviewSpeciesURL = pokemonData.species.url     
        var pokemonOverviewInfo = new pokemonOverviewModel({
                name: pokemonOverviewName,
                number: pokemonOverviewNumber,
                types: pokemonOverviewTypes,
                stats: pokemonOverviewStats,
                speciesURL:pokemonOverviewSpeciesURL,
                moves: pokemonMovesInfo

        })
        console.log(pokemonOverviewInfo)
        pokemonOverviewInfo.save(function(err){
            if(err){
                console.log('there was an error', err)
            }else{
                console.log('data added successfully')
            }
        })
    })
}
populateDatabase()*/

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getPokemon', function(req,res){
    pokemonOverviewModel.find({}, function(err, list) {
    if(err){

    }else{
        res.send(list)
    }
   })
})

app.listen(8080, function() {
      console.log("listening on 8080!");
});
