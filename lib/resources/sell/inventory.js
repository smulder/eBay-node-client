'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    createOrReplaceInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'PUT',
        path: 'sell/inventory/v1/inventory_item/{sku}',
        urlParams: ['sku'],
        required: ['sku']
    }),
    bulkCreateOrReplaceInventoryItem: eBayMethod({
        authorization: 'User',
	   contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/bulk_create_or_replace_inventory_item'
    }),
    deleteInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'DELETE',
        path: 'sell/inventory/v1/inventory_item/{sku}',
        urlParams: ['sku'],
        required: ['sku']
    }),
    getInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/inventory_item/{sku}',
        urlParams: ['sku'],
        required: ['sku']
    }),
    getInventoryItems: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/inventory_item'
    }),
    bulkGetInventoryItem: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/bulk_get_inventory_item'
   }),
   createOrReplaceInventoryItemGroup: eBayMethod({
	  authorization: 'User',
	  method: 'PUT',
	  path: 'sell/inventory/v1/inventory_item_group/{sku}',
	  urlParams: ['sku'],
	  required: ['sku']
  }),
  getInventoryItemGroup: eBayMethod({
	 authorization: 'User',
	 method: 'GET',
	 path: 'sell/inventory/v1/inventory_item_group/{inventoryItemGroupKey}',
	 urlParams: ['inventoryItemGroupKey'],
	 required: ['inventoryItemGroupKey']
 }),
 deleteInventoryItemGroup: eBayMethod({
	authorization: 'User',
	method: 'DELETE',
	path: 'sell/inventory/v1/inventory_item_group/{inventoryItemGroupKey}',
	urlParams: ['inventoryItemGroupKey'],
	required: ['inventoryItemGroupKey']
}),
bulkUpdatePriceQuantity: eBayMethod({
    authorization: 'User',
    method: 'POST',
    contentType: 'application/json',
    path: 'sell/inventory/v1/bulk_update_price_quantity'
})

});
