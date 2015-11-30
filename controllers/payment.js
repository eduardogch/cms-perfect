/**
 * GET /payment
 * Payment page.
 */
exports.index = function(req, res) {
  res.render('layouts/backend', {
    title: 'Payment',
    angularApp: 'PaymentApp'
  });
  test = req.body.test || 'gggggg';
};