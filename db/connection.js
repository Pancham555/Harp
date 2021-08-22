const mongoose = require('mongoose');
const dblink = process.env.DATABASE
//Set up default mongoose connection
mongoose.connect(dblink, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Connection successful..."))
    .catch((err) => console.log(err));
