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

/**
 * GET /payment
 * Payment REST Web Service.
 */
exports.findAll = function(req, res) {
  res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
};

exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
};