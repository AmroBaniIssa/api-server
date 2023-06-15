'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const people = require('./people.model');
const movies=require('./movies.model')
const authorsSchema = require('./author.model');
const booksSchema = require('./book.model');
const Collection = require('./lib/collection');

const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// let sequelize = new Sequelize(POSTGRES_URI, {});//if we don't have production or testing we can send {}


const authorsTable = authorsSchema(sequelize, DataTypes);
const booksTable = booksSchema(sequelize, DataTypes);


const authorCollection = new Collection(authorsTable);
const bookCollection = new Collection(booksTable);

authorsTable.hasMany(booksTable, {
    foreignKey: 'authorrId',
    sourceKey: 'id',
});
booksTable.belongsTo(authorsTable, {
    foreignKey: 'authorrId',
    targetKey: 'id',
});


module.exports = {
    db: sequelize,
    People: people(sequelize, DataTypes),
    Movies: movies(sequelize,DataTypes), 
    AuthorModel: authorCollection,
    BookModel: bookCollection,
}