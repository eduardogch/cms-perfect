var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");

/**
 * Settings for Nodemailer.
 */
var transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: secrets.sendgrid.user,
        pass: secrets.sendgrid.password
    }},{
    from: 'system@cmsperfect.com'
});

/**
 * Module Nodemailer.
 */
module.exports = transporter;