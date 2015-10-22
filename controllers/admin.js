/**
 * GET /admin
 * Admin page.
 */
exports.index = function(req, res) {
  res.render('admin/index', {
    title: 'Admin'
  });
};