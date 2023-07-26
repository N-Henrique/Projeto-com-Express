//const { Person } = require("./person.js");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect.js");

dotenv.config();

connectToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");

//require("./modules/express.js");

//const person = new Person("Henrique");
