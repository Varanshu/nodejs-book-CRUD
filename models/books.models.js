const { default: mongoose } = require("mongoose");

const BooksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    cost: {
        type: Number
    }
})

module.exports = Books = mongoose.model('Book', BooksSchema)