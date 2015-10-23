/**
 * GET /admin
 * Admin page.
 */
exports.index = function(req, res) {
  res.render('layouts/angular', {
    title: 'Admin',
    angularApp: 'AdminApp',
    angularController: 'AdminController'
  });
};