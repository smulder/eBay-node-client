'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({
    getOrders: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/fulfillment/v1/order'
   }),
   createShippingFulfillment: eBayMethod({
	  authorization: 'User',
	  method: 'POST',
	  path: '/sell/fulfillment/v1/order/{orderId}/shipping_fulfillment',
	  urlParams: ['orderId'],
	  required: ['orderId'],
	  contentType: 'application/json',
  })
});
