const express = require("express");
const router = express.Router();

const {
  getSurveyList,
  createSurvey,
  deleteSurvey,
  editSurvey,
} = require("../controllers/surveyForm");
const requireAuth = require("../middleware/requireAuth");

/// require auth for all survey routes
router.use(requireAuth);
router.get("/SurveyList", getSurveyList);
router.post("/CreateSurvey", createSurvey);
router.delete("/:id", deleteSurvey);
router.patch("/:id", editSurvey);
// router.post("/createQuestion",)
// router.get("/questionlist",)
module.exports = router;
