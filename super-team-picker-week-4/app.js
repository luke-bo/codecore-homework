
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const rootRouter = require("./routes/root");
const cohortsRouter = require("./routes/cohort");

const app = express();

// setup view engine
app.set("view engine", "ejs");

// setup logger
app.use(logger("dev"));
// epxress.urlencoded is used to parse the form inputs into a "body" property in our `req` object
app.use(express.urlencoded({ extended: true }));


app.use("/", rootRouter);
app.use("/cohorts", cohortsRouter);
app.use(express.static('public'))





// tells express to spinup a http server and listen at localhost:3000
const PORT = 3000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
  console.log(`listening on ${ADDRESS}:${PORT}`);
});

