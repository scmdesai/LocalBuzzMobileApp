/*
 * File: app/model/Deal.js
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

Ext.define('Contact.model.Deal', {
	extend: 'Ext.data.Model',
	alias: 'model.deal',

	requires: [
		'Ext.data.Field'
	],

	config: {
		useCache: false,
		fields: [
			{
				name: 'customerId'
			},
			{
				name: 'dealName'
			},
			{
				name: 'dealStatus'
			},
			{
				convert: function(v, rec) {
					return Ext.Date.format(new Date(v), 'n/j/Y');
				},
				dateFormat: 'n/j/Y',
				name: 'dealStartDate',
				type: 'date'
			},
			{
				convert: function(v, rec) {
					return Ext.Date.format(new Date(v), 'n/j/Y');
				},
				dateFormat: 'n/j/Y',
				name: 'dealEndDate',
				type: 'date'
			},
			{
				name: 'dealPictureURL'
			},
			{
				name: 'itemName'
			},
			{
				name: 'businessName'
			},
			{
				convert: function(v, rec) {
					var date = new Date();
					var test = Ext.Date.add(date,Ext.Date.DAY,3);
					return Ext.Date.format(test,'n/j/Y');
				},
				name: 'todayplusthreedays',
				type: 'date'
			}
		]
	}
});