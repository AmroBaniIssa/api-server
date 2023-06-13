const express = require('express');
const peopleRouter = express.Router();
const { People } = require('../models/index');
peopleRouter.get("/people", getPeople);
peopleRouter.get("/people/:id", getPerson);
peopleRouter.post("/people", createPerson);
peopleRouter.put("/people/:id", updatePerson);
peopleRouter.delete("/people/:id", deletePerson);