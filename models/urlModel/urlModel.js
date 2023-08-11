const mongoose = require("mongoose");
const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: String } }],
  },
  { timestamps: true }
);
const URL = mongoose.model("url", urlSchema);
module.exports = URL;
