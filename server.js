require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const morgan = require("morgan");
const peopleController = require("./controllers/peopleController");

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true}));

app.use("/people", peopleController);
app.listen(PORT, () => console.log("People coolin on port", PORT))