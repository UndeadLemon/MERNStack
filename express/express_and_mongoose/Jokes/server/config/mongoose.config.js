const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection successfully established!"))
    .catch(err => console.log(`Encountered an error! Error is: ${err}`))