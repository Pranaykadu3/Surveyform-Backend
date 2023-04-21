const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require("body-parser");
const Mongo = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const questionRoute = require("./routes/questionRoute");
app.use(express.json());
const SurveyFormRoutes = require("./routes/surveyForm");
const UserRoutes = require("./routes/userRoutes");
app.use("/surveyform", SurveyFormRoutes);
app.use("/user", UserRoutes);
app.use("/surveyQuestion", questionRoute);
mongoose
  .connect(Mongo)
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch(() => {
    console.log("failed to connect to db");
  });
app.use(bodyparser.json());

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
