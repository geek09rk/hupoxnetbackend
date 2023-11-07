const mongoose = require('mongoose');

const LocalSchema = new mongoose.Schema({

    'gene': {type:String}, 
    'location': {type:String},
    
});

const resultsdb = mongoose.connection.useDb("hupoxnet")
const LocalHuman = resultsdb.model('localization_humans', LocalSchema)

module.exports ={
    'human':LocalHuman,
}