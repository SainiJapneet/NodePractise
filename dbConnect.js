const mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect(){
mongoose.connect(process.env.DB_URL).then(() => console.log("Connected succcessfully")).
catch((error) => {
    console.log("Failed : " + error);
})
}
module.exports = dbConnect