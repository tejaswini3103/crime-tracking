// models/reportModel.js
const mongoose = require('mongoose');

const reportSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    crimeType: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
