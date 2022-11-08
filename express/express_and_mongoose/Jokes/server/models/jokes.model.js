const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    text: String,
    punchline: String
})

const Joke = mongoose.model("Joke", JokeSchema)
module.exports = Joke