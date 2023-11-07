const mongoose = require('mongoose');

const InterproSchema = new mongoose.Schema({

    'gene': {type:String},
    'length':{type:Number}, 
    'interpro_id': {type:String},
    'sourcedb': {type:String},
    'domain': {type:String},
    'domain_description': {type:String},
    'score': {type:Number},
    
});


const resultsdb = mongoose.connection.useDb("hupoxnet")
const InterproHuman = resultsdb.model('interpro_humans', InterproSchema)
const InterproDQ011157 = resultsdb.model('interpro_dqs', InterproSchema)
const InterproJX878409 = resultsdb.model('interpro_jxas', InterproSchema)
const InterproJX878425 = resultsdb.model('interpro_jxbs', InterproSchema)
const InterproJX878428 = resultsdb.model('interpro_jxcs', InterproSchema)
const InterproKJ642615 = resultsdb.model('interpro_kjs', InterproSchema)
const InterproMN648051 = resultsdb.model('interpro_mnas', InterproSchema)
const InterproMN702444 = resultsdb.model('interpro_mnbs', InterproSchema)
const InterproMT903340 = resultsdb.model('interpro_mtas', InterproSchema)
const InterproMT903342 = resultsdb.model('interpro_mtbs', InterproSchema)
const InterproMT903343 = resultsdb.model('interpro_mtcs', InterproSchema)
const InterproMT903344 = resultsdb.model('interpro_mtds', InterproSchema)
const InterproMT903345 = resultsdb.model('interpro_mtes', InterproSchema)
const InterproNC003310 = resultsdb.model('interpro_ncs', InterproSchema)
const InterproON563414 = resultsdb.model('interpro_onas', InterproSchema)
const InterproON736420 = resultsdb.model('interpro_onbs', InterproSchema)
const InterproON745215 = resultsdb.model('interpro_oncs', InterproSchema)
const InterproON872184 = resultsdb.model('interpro_onds', InterproSchema)
const InterproOP019275 = resultsdb.model('interpro_opas', InterproSchema)
const InterproOP022170 = resultsdb.model('interpro_opbs', InterproSchema)
const InterproOP160532 = resultsdb.model('interpro_opcs', InterproSchema)
const InterproOP215228 = resultsdb.model('interpro_opds', InterproSchema)
const InterproOP245306 = resultsdb.model('interpro_opds', InterproSchema)

module.exports ={
    'human':InterproHuman,
    'DQ011157':InterproDQ011157,
    'JX878409':InterproJX878409,
    'JX878425':InterproJX878425,
    'JX878428':InterproJX878428,
    'KJ642615':InterproKJ642615,
    'MN648051':InterproMN648051,
    'MN702444':InterproMN702444,
    'MT903340':InterproMT903340,
    'MT903342':InterproMT903342,
    'MT903343':InterproMT903343,
    'MT903344':InterproMT903344,
    'MT903345':InterproMT903345,
    'NC_003310':InterproNC003310,
    'ON563414':InterproON563414,
    'ON736420':InterproON736420,
    'ON745215':InterproON745215,
    'ON872184':InterproON872184,
    'OP019275':InterproOP019275,
    'OP022170':InterproOP022170,
    'OP160532':InterproOP160532,
    'OP215228':InterproOP215228,
    'OP245306':InterproOP245306,
}