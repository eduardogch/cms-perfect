/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  if (req.user) return res.redirect('/dashboard#/');
  res.render('home/index', {
    title: 'Home'
  });
};