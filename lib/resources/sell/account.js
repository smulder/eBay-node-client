'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getSalesTaxes: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/sales_tax',
        required: ['countryCode']
    }),
    getSalesTax: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
    }),
    createOrReplaceSalesTax: eBayMethod({
        authorization: 'User',
        method: 'PUT',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
    }),
    deleteSalesTax: eBayMethod({
        authorization: 'User',
        method: 'DELETE',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
   }),
   getFulfillmentPolicies: eBayMethod({
	   authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/fulfillment_policy/',
        required: ['marketplace_id']
   }),
   getPaymentPolicies: eBayMethod({
	   authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/payment_policy/',
	   required: ['marketplace_id']
   }),
   getReturnPolicies: eBayMethod({
	   authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/return_policy/',
	   required: ['marketplace_id']
   }),
   createPaymentPolicy: eBayMethod({
	   authorization: 'User',
        method: 'POST',
        path: 'sell/account/v1/payment_policy/'
   }),
   createFulfillmentPolicy: eBayMethod({
	   authorization: 'User',
        method: 'POST',
        path: 'sell/account/v1/fulfillment_policy/'
   })

});
