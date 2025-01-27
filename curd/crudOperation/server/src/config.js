const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/crud").then((data)=>{
    console.log('mongoose connected successfully.')
})
.catch((error)=>{
    console.log(error)
})

