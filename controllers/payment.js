/**
 * GET /payment
 * Payment page.
 */
exports.index = function(req, res) {
  res.render('layouts/angular', {
    title: 'Payment',
    angularApp: 'PaymentApp',
    angularController: 'PaymentController'
  });
};