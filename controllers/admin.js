/**
 * GET /admin
 * Admin page.
 */
exports.index = function(req, res) {
  res.render('layouts/backend', {
    title: 'Admin',
    angularApp: 'AdminApp',
    angularController: 'AdminController'
  });
};