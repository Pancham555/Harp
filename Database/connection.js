var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.DBLINK
// process.env.DBLINK ||'mongodb://127.0.0.1/panchamdb'

mongoose.connect(mongoDB).then(() => console.log("DB is connected!"))
    .catch(err => console.log(err));
