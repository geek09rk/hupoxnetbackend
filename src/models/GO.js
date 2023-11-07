const mongoose = require('mongoose');

const GOSchema = new mongoose.Schema({

    'gene': {type:String},
    'term':{type:String}, 
    'description': {type:String},
    'definition': {type:String},
    'evidence':{type:String}, 
    'ontology':{type:String},
    
});



const resultsdb = mongoose.connection.useDb("hupoxnet")
const GoHuman = resultsdb.model('go_humans', GOSchema)
const GoDQ011157 = resultsdb.model('go_dqs', GOSchema)
const GoJX878409 = resultsdb.model('go_jxas', GOSchema)
const GoJX878425 = resultsdb.model('go_jxbs', GOSchema)
const GoJX878428 = resultsdb.model('go_jxcs', GOSchema)
const GoKJ642615 = resultsdb.model('go_kjs', GOSchema)
const GoMN648051 = resultsdb.model('go_mnas', GOSchema)
const GoMN702444 = resultsdb.model('go_mnbs', GOSchema)
const GoMT903340 = resultsdb.model('go_mtas', GOSchema)
const GoMT903342 = resultsdb.model('go_mtbs', GOSchema)
const GoMT903343 = resultsdb.model('go_mtcs', GOSchema)
const GoMT903344 = resultsdb.model('go_mtds', GOSchema)
const GoMT903345 = resultsdb.model('go_mtes', GOSchema)
const GoNC003310 = resultsdb.model('go_ncs', GOSchema)
const GoON563414 = resultsdb.model('go_onas', GOSchema)
const GoON736420 = resultsdb.model('go_onbs', GOSchema)
const GoON745215 = resultsdb.model('go_oncs', GOSchema)
const GoON872184 = resultsdb.model('go_onds', GOSchema)
const GoOP019275 = resultsdb.model('go_opas', GOSchema)
const GoOP022170 = resultsdb.model('go_opbs', GOSchema)
const GoOP160532 = resultsdb.model('go_opcs', GOSchema)
const GoOP215228 = resultsdb.model('go_opds', GOSchema)
const GoOP245306 = resultsdb.model('go_opds', GOSchema)

module.exports ={
    'human':GoHuman,
    'DQ011157':GoDQ011157,
    'JX878409':GoJX878409,
    'JX878425':GoJX878425,
    'JX878428':GoJX878428,
    'KJ642615':GoKJ642615,
    'MN648051':GoMN648051,
    'MN702444':GoMN702444,
    'MT903340':GoMT903340,
    'MT903342':GoMT903342,
    'MT903343':GoMT903343,
    'MT903344':GoMT903344,
    'MT903345':GoMT903345,
    'NC_003310':GoNC003310,
    'ON563414':GoON563414,
    'ON736420':GoON736420,
    'ON745215':GoON745215,
    'ON872184':GoON872184,
    'OP019275':GoOP019275,
    'OP022170':GoOP022170,
    'OP160532':GoOP160532,
    'OP215228':GoOP215228,
    'OP245306':GoOP245306,
}
