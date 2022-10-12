const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    ID: { type: "String", default: "RID-001" },
    recruitment_name: { type: "String", required: true, trim: true },
    candidates_no: { type: "Number", default: 23 },
    start_date: { type: "String", default: "20/06/2021" },
    status: { type: "String", default: "In Progress" },
  },
  { timestaps: true }
);

const User = mongoose.model("Recruitment Name", userSchema);

module.exports = User;
