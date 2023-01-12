const mongoose = require('mongoose');

const connectDB = async (url) =>{
   await  mongoose.connect(url).then(()=>{
    console.log("database connection established")
   })
}
module.exports = connectDB