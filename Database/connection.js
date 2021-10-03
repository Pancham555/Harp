var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.DBLINK
mongoose.connect(mongoDB).then(() => console.log("DB is connected!"))
    .catch(err => console.log(err));

