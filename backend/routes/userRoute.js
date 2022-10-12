const express = require("express");
const {
  userRecruitmentName,
  getRecruitment,
  updateRecruitmentName,
  deleteRecruitment,
} = require("../controllers/userController");
const router = express.Router();

router.post("/api/create-new-recruitment", userRecruitmentName);
router.get("/api/myrecruitment", getRecruitment);
router.put("/api/update/:id", updateRecruitmentName);
router.delete("/api/delete/:id", deleteRecruitment);

module.exports = router;
