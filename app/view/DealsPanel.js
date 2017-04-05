/*
 * File: app/view/DealsPanel.js
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

Ext.define('LocalBuzzMerchantDemo.view.DealsPanel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.DealsPanel',

	requires: [
		'LocalBuzzMerchantDemo.view.ListOfDeals',
		'Ext.dataview.List',
		'Ext.Button'
	],

	config: {
		baseCls: 'x-list',
		id: 'dealsPanel',
		itemId: 'dealsPanel',
		minHeight: '80%',
		padding: '5 5 5 5',
		style: 'border:1px inset;',
		styleHtmlContent: true,
		url: '',
		items: [
			{
				xtype: 'listofdeals',
				docked: 'top',
				height: '90%',
				itemId: 'listofdeals',
				width: '100%'
			},
			{
				xtype: 'component',
				docked: 'bottom',
				html: '<p style="font-size:2.5vw;text-align:center" > As per our Fair Use Policy,there cannot be more than 5 Active Buzz per account </p>'
			},
			{
				xtype: 'button',
				docked: 'bottom',
				height: '7vh',
				id: 'UploadDeal',
				itemId: 'UploadDeal',
				margin: '0 5 0 5',
				style: 'font-size:5vw',
				ui: 'confirm',
				width: '',
				text: 'Create Buzz'
			}
		],
		listeners: [
			{
				fn: 'onDealsPanelActivate',
				event: 'activate'
			},
			{
				fn: 'onDealsPanelPainted',
				event: 'painted'
			}
		]
	},

	onDealsPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {

		var storeUserDetails = Ext.getStore('UserDetails');
		storeUserDetails.load();
		var customerId;
		var businessName;


		storeUserDetails.each(function(record){
			//console.log('StoreUserDetails : ' +record.get('customerId'));
			customerId = record.get('customerId');
			businessName = record.get('businessName');

		});


		var store = Ext.getStore('MyDealsStore');
		store.clearFilter();
		store.filter('customerId',customerId);

















	},

	onDealsPanelPainted: function(element, eOpts) {


		var store = Ext.getStore('MyDealsStore');
		store.load();

	},

	initialize: function() {
		this.callParent();
		var storeUserDetails = Ext.getStore('UserDetails');
		storeUserDetails.load();
		var customerId;
		var businessName;



		storeUserDetails.each(function(record){
			//console.log('StoreUserDetails : ' +record.get('customerId'));
			customerId = record.get('customerId');
			businessName = record.get('businessName');


		});


		var store = Ext.getStore('MyDealsStore');
		store.clearFilter();
		store.filter('customerId',customerId);
		if(store.getCount() >= 5){
			Ext.getCmp('UploadDeal').disable();

		}
		else {
			Ext.getCmp('UploadDeal').enable();
		}
	}

});