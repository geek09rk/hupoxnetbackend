const mongoose = require('mongoose');

const KEGGSchema = new mongoose.Schema({

    'gene': {type:String},
    'pathway':{type:String}, 
    'description': {type:String},
    
});

const resultsdb = mongoose.connection.useDb("hupoxnet")
const KEGGHuman = resultsdb.model('kegg_humans', KEGGSchema)
// const KEGGTurgidums = resultsdb.model('kegg_turgidums', KEGGSchema)
// const KEGGTindicas = resultsdb.model('kegg_tindicas', KEGGSchema)

module.exports ={
    'human': KEGGHuman,
    // 'turgidum':KEGGTurgidums,
    // 'tindica':KEGGTindicas,
}