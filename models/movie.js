const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
    userid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    release: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: false,
    },
    IMDB: {
        type: String,
        required: false,
    },
})

const Movie = mongoose.model("movies",movieSchema)

module.exports = Movie