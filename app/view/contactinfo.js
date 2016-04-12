/*
 * File: app/view/contactinfo.js
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

Ext.define('Contact.view.contactinfo', {
	extend: 'Ext.form.Panel',
	alias: 'widget.contactinfo',

	requires: [
		'Contact.view.Picture',
		'Ext.Toolbar',
		'Ext.Button',
		'Ext.Spacer',
		'Ext.field.TextArea'
	],

	config: {
		border: 5,
		height: '100%',
		itemId: 'info',
		minHeight: '100%',
		style: 'background;#fff',
		styleHtmlContent: true,
		modal: true,
		scrollable: false,
		layout: {
			type: 'vbox',
			align: 'stretchmax'
		},
		items: [
			{
				xtype: 'toolbar',
				cls: 'toolbarCls',
				docked: 'top',
				ui: 'plain',
				items: [
					{
						xtype: 'button',
						docked: 'right',
						height: 48,
						itemId: 'editButton',
						style: 'color:#00529D',
						ui: 'plain',
						width: '20%',
						iconCls: 'compose'
					},
					{
						xtype: 'spacer',
						height: 11,
						width: 18
					},
					{
						xtype: 'component',
						cls: 'contact-name',
						disabled: true,
						html: '<b>First Name</b>',
						id: 'nameTxt',
						itemId: 'nameTxt'
					}
				]
			},
			{
				xtype: 'textfield',
				cls: 'icon-phone',
				disabled: false,
				height: '',
				itemId: 'phoneNumber',
				margin: '',
				minWidth: '',
				padding: '10 10 10 10',
				clearIcon: false,
				name: 'phoneNumber',
				readOnly: true
			},
			{
				xtype: 'textfield',
				cls: 'icon-email',
				disabled: false,
				height: '',
				itemId: 'email',
				minWidth: '',
				padding: '10 10 10 10',
				clearIcon: false,
				label: '',
				name: 'emailAddress',
				readOnly: true
			},
			{
				xtype: 'textfield',
				cls: 'icon-globe',
				disabled: false,
				height: '',
				itemId: 'websiteDisplayName',
				padding: '10 10 10 10',
				style: 'font-size:2px !important',
				clearIcon: false,
				name: 'websiteDisplayName',
				readOnly: true
			},
			{
				xtype: 'textareafield',
				baseCls: '',
				cls: [
					'icon-location',
					'customfield1'
				],
				disabled: false,
				height: '12vh',
				html: '',
				itemId: 'address',
				maxHeight: '',
				minHeight: '',
				padding: '10 10 10 10',
				style: '\'font-size:3.5vw;font-family: arial\'',
				clearIcon: false,
				name: 'address',
				readOnly: true,
				maxRows: 2
			},
			{
				xtype: 'contactpic',
				cls: 'x-panel-body',
				docked: 'top',
				height: '30%',
				itemId: 'contactpic',
				width: ''
			}
		]
	},

	setRecord: function(record) {

		this.callParent(arguments);




		if (record) {


			var name = record.get('businessName');



			var customerId = record.get('customerId');

			this.down('#nameTxt').setHtml(name);

		   this.down('contactpic').setData(record.data);








		}





	}

});