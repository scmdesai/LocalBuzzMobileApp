/*
 * File: app/store/MyJsonPStore.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('LocalBuzzMerchantDemo.store.MyJsonPStore', {
	extend: 'Ext.data.Store',
	alias: 'store.MyJsonPStore',

	requires: [
		'LocalBuzzMerchantDemo.model.Contact',
		'Ext.data.proxy.JsonP',
		'Ext.data.reader.Json',
		'Ext.util.Grouper'
	],

	config: {
		autoLoad: true,
		model: 'LocalBuzzMerchantDemo.model.Contact',
		storeId: 'MyJsonPStore',
		proxy: {
			type: 'jsonp',
			url: 'http://services.appsonmobile.com/demoStores',
			reader: {
				type: 'json'
			}
		},
		sorters: {
			sorterFn: function(first, second) {

			}
		},
		grouper: {
			groupFn: function(item) {
				return record.get('category');
			},
			sortProperty: ''
		}
	}
});