const express = require('express');
const booksRouter = express.Router();
const { BookModel } = require('../models/index');
booksRouter.get("/book", getAllBooks);
booksRouter.get("/book/:id", getOneBook);
booksRouter.post("/book", createBook);
booksRouter.put("/book/:id", updateBook);
booksRouter.delete("/book/:id", deleteBook);

async function getAllBooks(req, res) {
    let booksResult = await BookModel.read();
    res.status(200).json(booksResult);
}

async function getOneBook(req, res) {
    const BookId = parseInt(req.params.id);
    let Book = await BookModel.read(BookId)
    res.status(200).json(Book);
}
async function createBook(req, res) {
    let newBook = req.body;
    let Book = await BookModel.add(newBook);
    res.status(201).json(Book);
}
async function updateBook(req, res) {
    let BookId = parseInt(req.params.id);
    let updateBook = req.body;
    let updatedBook = await BookModel.update(updateBook, BookId);
    res.status(201).json(updatedBook);
}
async function deleteBook(req, res) {
    let BookId = parseInt(req.params.id);
    let deleteBook = await BookModel.delete(BookId);
    res.status(204).json(deleteBook);
}

module.exports = booksRouter;