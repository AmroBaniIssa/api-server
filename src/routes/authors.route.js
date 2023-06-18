const express = require('express');
const authorsRouter = express.Router();
const Collection = require('../models/lib/collection');
const { AuthorModel, BookModel } = require('../models/index');
authorsRouter.get("/author", getAllAuthors);
authorsRouter.get("/author/:id", getOneAuthor);
authorsRouter.post("/author", createAuthor);
authorsRouter.put("/author/:id", updateAuthor);
authorsRouter.delete("/author/:id", deleteAuthor);



// authorsRouter.get("/authorBooks/:id", authorBooks);
// async function authorBooks(req, res) {
//     const AuthorId = parseInt(req.params.id);
//     let authorBooksResult = await AuthorModel.readAuthorBooks(AuthorId, BookModel.model);
//     res.status(200).json(authorBooksResult);
// }

authorsRouter.get("/authorBooks/:id", authorBooks);
async function authorBooks(req, res) {
    const AuthorId = parseInt(req.params.id);
    let authorBooksResult = await BookModel.readAuthorBooks(AuthorId,AuthorModel.firstName);
    res.status(200).json(authorBooksResult);
}

async function getAllAuthors(req, res) {
    let authorsResult = await AuthorModel.read();
    res.status(200).json(authorsResult);
}

async function getOneAuthor(req, res) {
    const AuthorId = parseInt(req.params.id);
    let Author = await AuthorModel.read(AuthorId)
    res.status(200).json(Author);
}
async function createAuthor(req, res) {
    let newAuthor = req.body;
    let Author = await AuthorModel.add(newAuthor);
    res.status(201).json(Author);
}
async function updateAuthor(req, res) {
    let AuthorId = parseInt(req.params.id);
    let updateAuthor = req.body;
    let foundAuthor = await AuthorModel.update(updateAuthor, AuthorId);
    res.status(201).json(foundAuthor);
}
async function deleteAuthor(req, res) {
    let AuthorId = parseInt(req.params.id);
    let deleteAuthor = await AuthorModel.delete(AuthorId);
    res.status(204).json(deleteAuthor);
}

module.exports = authorsRouter;