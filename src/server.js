'use strict';
const express = require("express");
const app = express();
const peopleRouter = require('./routes/people.route');
const moviesRouter = require('./routes/movies.route');

app.use(express.json());
app.use(peopleRouter);
app.use(moviesRouter);


app.get('/', welcomeHandler);
function welcomeHandler(req, res) {
    res.status(200).send('hi');
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}