const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { readdirSync } = require("fs");
const morgan = require("morgan");
const colors = require('colors');

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// requires / database connection
const connection = require("./db");
(async () => await connection())();


// all routes
readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));
// image preview
app.use('/public', express.static('public'))

// port listening
const startServer = (port) => {
    try {
      app.listen(port, () => {
        console.log(colors.magenta(`Server running: http://localhost:${port}`));
      });
    } catch (error) {
      console.error(error);
      process.exit();
    }
  };
startServer(process.env.PORT || 5000);



