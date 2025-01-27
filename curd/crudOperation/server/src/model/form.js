const mongoose = require('mongoose')

let mySchema = new mongoose.Schema({
    name:{
        type: String
    },
    surname:{
        type: String
    },
    email:{
        type: String
    },
    mno:{
        type: String
    },
    passwoard:{
        type : String
    },
    comment:{
        type: String
    }
})

module.exports = new mongoose.model('crudDatas',mySchema)