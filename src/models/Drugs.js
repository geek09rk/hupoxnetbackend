const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({

    'protein_id': {type:String},
    'drug_id': {type:String},
    'common_name': {type:String},
    'gene_name': {type:String},
    'genbank_id': {type:String},
    'ChEMBLID': {type:String},
    'ChEMBL_Name': {type:String},
    'ProteinType': {type:String},
});

const resultsdb = mongoose.connection.useDb("hupoxnet")
const DrugsHuman = resultsdb.model('drugs_humans', DrugSchema)

module.exports ={
    'human':DrugsHuman,
}

