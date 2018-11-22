// convention is capital for classes that export, passport doesn't export so it's lowercase 

const send = require('sendgrid');
const helper = sendgrid.mail; // send grid documentation
const keys = require('../config/keys');

// from "Mail class" we want to add some additional features. Thus, extended/inherited
class Mailer extends helper.Mail {

    
}
