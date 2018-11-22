const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0}, // Records vote
    no: { type: Number, default: 0} // Records vote
});

mongoose.model('surveys', surveySchema);