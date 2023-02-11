const express = require('express');
const { placeOneBook, getAll, deleteBook, getOneBook, updateOneBook } = require('../controllers/books.controllers');
const router = express.Router()

const routes = (app) => {
    router.get('/books/all', getAll);
    router.post('/books', placeOneBook);
    
    router.delete('/books/:id', deleteBook)
    router.get('/books/:id', getOneBook)
    router.post('/books/:id', updateOneBook)

    app.use(router);
}

module.exports = {
    routes
}