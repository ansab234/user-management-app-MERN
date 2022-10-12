const User = require("../models/userModel");

const userRecruitmentName = async (req, res) => {
  try {
    const { recruitment_name } = req.body;

    if (!recruitment_name) {
      res.status(400).json({ message: "Enter Recruitment Name!!" });
      throw new Error("Please Enter Recruitment Name!");
    }

    const user = await User.create({
      recruitment_name,
    });

    res.status(201).json({
      id: user._id,
      recruitment_name: user.recruitment_name,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getRecruitment = async (req, res) => {
  try {
    const recruitmentNames = await User.find();
    res.json(recruitmentNames);
  } catch (error) {
    res.json({
      Error: error.message,
    });
    console.log(error.message);
  }
};

const updateRecruitmentName = async (req, res) => {
  try {
    const { recruitment_name } = req.body;

    const updateRecruitmentName = await User.findById(req.params.id);

    if (updateRecruitmentName) {
      updateRecruitmentName.recruitment_name = recruitment_name;

      const updatedRecruitmentName = await updateRecruitmentName.save();
      res.json(updatedRecruitmentName);
    } else {
      res.status(404);
      throw new Error("Not found");
    }
  } catch (error) {
    res.json({
      Error: error.message,
    });
    console.log(error.message);
  }
};

const deleteRecruitment = async (req, res) => {
  try {
    const recruitment = await User.findById(req.params.id);

    if (recruitment) {
      await recruitment.remove();
      res.json({ message: "Recruitment Deleted Successfully!!" });
    } else {
      res.status(404);
      throw new Error("Not Found");
    }
  } catch (error) {
    res.json({
      Error: error.message,
    });
    console.log(error.message);
  }
};
module.exports = {
  userRecruitmentName,
  getRecruitment,
  updateRecruitmentName,
  deleteRecruitment,
};
