const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String], // array of strings to send to user emails
    yes: { type: Number, default: 0}, // Records vote
    no: { type: Number, default: 0} // Records vote
});

mongoose.model('surveys', surveySchema);