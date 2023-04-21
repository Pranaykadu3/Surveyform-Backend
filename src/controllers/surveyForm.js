const { Survey } = require("../models/SurveySchema");
const mongoose = require("mongoose");
const getSurveyList = async (req, res) => {
  const user_id = req.user._id;

  const SurveyList = await Survey.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(SurveyList);
};
const createSurvey = async (req, res) => {
  const {
    name,
    Description,
    TypeOfSurvey,
    StartDate,
    EndDate,
    OtherCriteria,
    user,
  } = req.body;

  let emptyFields = [];
  if (!name) {
    emptyFields.push("name");
  }
  if (!Description) {
    emptyFields.push("Description");
  }
  if (!TypeOfSurvey) {
    emptyFields.push("TypeOfSurvey");
  }
  if (!StartDate) {
    emptyFields.push("StartDate");
  }
  if (!EndDate) {
    emptyFields.push("EndDate");
  }
  if (!OtherCriteria) {
    emptyFields.push("OtherCriteria");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields", emptyFields });
  }
  try {
    const user_id = req.user._id;
    const survey = await Survey.create({
      name,
      Description,
      TypeOfSurvey,
      StartDate,
      EndDate,
      OtherCriteria,
      user_id,
    });
    res.status(200).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteSurvey = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such survey" });
  }
  const survey = await Survey.findOneAndDelete({ _id: id });
  if (!survey) {
    return res.status(404).json({ error: "no such survey" });
  }
  res.status(200).json(survey);
};
const editSurvey = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such survey" });
  }
  const survey = await Survey.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!survey) {
    return res.status(404).json({ error: "no such survey" });
  }
  res.status(200).json(survey);
};
module.exports = { getSurveyList, createSurvey, deleteSurvey, editSurvey };
