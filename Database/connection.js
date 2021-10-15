var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/panchamdb'
// process.env.DBLINK || 

mongoose.connect(mongoDB).then(() => console.log("DB is connected!"))
    .catch(err => console.log(err));
