var transporter = require("../config/email");

/**
 * GET /dashboard
 * Dashboard page.
 */
exports.getDashboard = function(req, res) {
  res.render('layouts/backend', {
    title: 'Dashboard',
    angularApp: 'DashboardApp'
  });
};

/**
 * POST /dashboard
 * Send a email.
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

  var mailOptions = {
    to: req.body.email,
    subject: 'Contact Form | CMS Perfect',
    text: req.body.message
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