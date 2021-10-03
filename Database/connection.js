var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://Pancham:mongoserver05@cluster0.dpwtg.mongodb.net/Harpnett?retryWrites=true&w=majority';
mongoose.connect(mongoDB).then(() => console.log("DB is connected!"))
    .catch(err => console.log(err));

