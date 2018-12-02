'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({
    getOrders: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/fulfillment/v1/order'
    })
});
