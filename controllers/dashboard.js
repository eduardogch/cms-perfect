var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: secrets.sendgrid.user,
    pass: secrets.sendgrid.password
  }
});

/**
 * GET /dashboard
 * Dashboard page.
 */
exports.getDashboard = function(req, res) {
  res.render('layouts/angular', {
    title: 'Dashboard',
    angularApp: 'DashboardApp',
    angularController: 'DashboardController'

  });
};

/**
 * POST /dashboard
 * Send a contact form via Nodemailer.
 */
exports.postContact = function(req, res) {
  req.assert('name', 'Name cannot be blank').notEmpty();
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('message', 'Message cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contact');
  }

  var from = 'system@cmsperfect.com';
  var name = req.body.name;
  var body = req.body.message;
  var to = req.body.email;
  var subject = 'Contact Form | CMS Perfect';

  var mailOptions = {
    to: to,
    from: from,
    subject: subject,
    text: body
  };

  transporter.sendMail(mailOptions, function(err) {
    if (err) {
      req.flash('errors', { msg: err.message });
      return res.redirect('/dashboard');
    }
    req.flash('success', { msg: 'Email has been sent successfully!' });
    res.redirect('/dashboard');
  });
};