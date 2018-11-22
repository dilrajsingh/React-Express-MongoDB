// convention is capital for classes that export, passport doesn't export so it's lowercase 

const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // send grid documentation
const keys = require('../config/keys');

// from "Mail class" we want to add some additional features. Thus, extended/inherited
class Mailer extends helper.Mail {
    constructor() {

    }
}

module.exports = Mailer;
