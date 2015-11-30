var secrets = require('../config/secrets');
var stripe = require('stripe')(secrets.stripe.secretKey);
var paypal = require('paypal-rest-sdk');
var BitGo = require('bitgo');
var conekta;

/**
 * Settings for Stripe.
 */
stripe.charges.create({
    amount: 395,
    currency: 'usd',
    source: 'hola',
    description: 'hola'
}, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
        console.log('Your card has been declined.');
    }
    console.log('Your card has been charged successfully.' + charge);
});

/**
 * Settings for Paypal.
 */
paypal.configure({
    mode: 'sandbox',
    client_id: secrets.paypal.client_id,
    client_secret: secrets.paypal.client_secret
});

/**
 * Settings for Bitgo.
 */
var bitgo = new BitGo.BitGo({ env: 'test', accessToken: secrets.bitgo.accessToken });

/**
 * Module Nodemailer.
 */
//module.exports = transporter;