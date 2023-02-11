const Books = require("../models/books.models")

const getAll = async (req, res) => {
    try {
        const allValues = await Books.find()
        res.send({
            allValues
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

const placeOneBook = async (req, res) => {
    try {
        const {
            name,
            publisher,
            cost
        } = req.body

        const value = await Books.create({
            name,
            publisher,
            cost
        })

        console.log(value);
        res.send({
            id: value._id,
            name: value.name,
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message })
    }
}

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id
        if (!id)
            throw new Error()

        const bookDetails = await Books.findByIdAndDelete((id))
        console.log(bookDetails);
        res.send(`${bookDetails.name} deleted Successfully`)
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message })
    }
}

const getOneBook = async (req, res) => {
    try {
        const id = req.params.id
        if (!id)
            throw new Error()

        const bookDetails = await Books.findById((id))
        console.log(bookDetails);
        res.send({
            id: bookDetails._id,
            name: bookDetails.name,
            publisher: bookDetails.publisher,
            cost: bookDetails.cost
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message })
    }
}

const updateOneBook = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const id = req.params.id
        if (!id)
            throw new Error()

        const bookDetails = await Books.findByIdAndUpdate(id, req.body)
        console.log("bookDetails", bookDetails);
        res.send(`values has been changed for Book by ID ${id}`)
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message })
    }
}


module.exports = {
    getAll,
    placeOneBook,
    deleteBook,
    getOneBook,
    updateOneBook
}