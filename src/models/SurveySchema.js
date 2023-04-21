const mongoose = require("mongoose");
const SurveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    TypeOfSurvey: {
      type: String,
      required: true,
    },
    StartDate: {
      type: Date,
      required: true,
    },
    EndDate: {
      type: Date,
      required: true,
    },
    OtherCriteria: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Survey = mongoose.model("survey", SurveySchema);
module.exports = { Survey };
