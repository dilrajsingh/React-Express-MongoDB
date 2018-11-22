const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipientSchema = require('./Recipient');

/* Every survey belongs to a particular user.
*/

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0}, // Records vote
    no: { type: Number, default: 0}, // Records vote
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, // Convention is that _ is a reference field
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);