const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    feel: {
      type: String,
      required: true,
    },
    boost: {
      type: String,
      required: true,
    },
    thingDuring: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true, // we only make a POST request when we've finished the bin beat, so there will be an end time
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Entry", entrySchema);
