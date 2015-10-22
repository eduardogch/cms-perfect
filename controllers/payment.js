/**
 * GET /payment
 * Payment page.
 */
exports.index = function(req, res) {
  res.render('payment/index', {
    title: 'Payment'
  });
};