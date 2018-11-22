const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String] // array of strings to send
});

mongoose.model('surveys', surveySchema);