/**
 * GET /
 * Dashboard page.
 */
exports.getDashboard = function(req, res) {
  res.render('dashboard/index', {
    title: 'Dashboard'
  });
};