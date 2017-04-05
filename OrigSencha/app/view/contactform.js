/*
 * File: app/view/contactform.js
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

Ext.define('Contact.view.contactform', {
	extend: 'Ext.form.Panel',
	alias: 'widget.contactform',

	requires: [
		'Contact.view.Picture',
		'Ext.Toolbar',
		'Ext.Button',
		'Ext.Spacer',
		'Ext.field.TextArea',
		'Ext.Img'
	],

	config: {
		html: '',
		id: 'formpanel',
		itemId: 'formpanel',
		style: 'background:white',
		ui: 'light',
		autoDestroy: false,
		modal: true,
		scrollable: false,
		multipartDetection: false,
		layout: {
			type: 'vbox',
			align: 'stretchmax'
		},
		items: [
			{
				xtype: 'toolbar',
				cls: 'toolbarCls',
				docked: 'top',
				style: 'border-top:none',
				ui: 'plain',
				autoDestroy: false,
				items: [
					{
						xtype: 'button',
						itemId: 'cancelButton',
						margin: '0 0 0 10',
						styleHtmlContent: true,
						ui: 'decline',
						width: '30%',
						text: 'Cancel'
					},
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						handler: function(button, e) {



							var form = this.up('contactform');
							var store = Ext.getStore('MyJsonPStore');
							var record = form.getRecord();
							var customerId = form.getRecord().get('customerId');
							record.beginEdit(true, record.getChanges());
							form.updateRecord(record);
							record.endEdit(true, record.getChanges());
							record.commit();
							store.sync();
							store.load();






							form.submit({
								url: 'http://services.appsonmobile.com/updateStoreInfo/' + customerId,
								success: function(form, action) {

									Ext.Msg.alert('Success', action.msg);



									form.destroy();
								},
								failure: function(form,action) {

									store.load();
									Ext.Msg.alert('Failure',action.msg);

									form.destroy();




								}

							});





						},
						cls: 'button',
						itemId: 'saveContactButton',
						margin: '0 10 0 0',
						styleHtmlContent: true,
						ui: 'confirm',
						width: '30%',
						text: 'Save'
					}
				]
			},
			{
				xtype: 'button',
				handler: function(button, e) {
					var storeUserDetails = Ext.getStore('UserDetails');
					storeUserDetails.load();
					var customerId;
					var businessName;

					storeUserDetails.each(function(record){
						console.log('StoreUserDetails : ' +record.get('customerId'));
						customerId = record.get('customerId');
						businessName = record.get('businessName');

					});




					var view = Ext.Viewport.add({xtype: 'ChangeContactPicForm'});





					var record = Ext.getStore('MyJsonPStore').findRecord('customerId',customerId,0,true,false,false);

					view.setRecord(record);
					view.showBy(button);
				},
				flex: 1,
				docked: 'top',
				id: 'changePicButton',
				left: '0px',
				margin: '5 5 5 5',
				style: 'opacity:0.5;position:absolute',
				top: '-10px',
				ui: 'plain',
				width: '20%',
				iconCls: 'add'
			},
			{
				xtype: 'textfield',
				cls: 'customfield',
				height: '15%',
				id: 'businessName',
				itemId: 'businessName',
				margin: '30 15 2 15',
				styleHtmlContent: true,
				name: 'businessName'
			},
			{
				xtype: 'textfield',
				cls: [
					'icon-phone',
					'customfield'
				],
				id: 'phoneNumber',
				itemId: 'phoneNumber',
				margin: '0 15 2 15',
				styleHtmlContent: true,
				name: 'phoneNumber'
			},
			{
				xtype: 'textareafield',
				cls: [
					'customfield',
					'icon-location'
				],
				height: '20%',
				id: 'address',
				itemId: 'address',
				margin: '0 15 0 15',
				styleHtmlContent: true,
				name: 'address',
				required: true
			},
			{
				xtype: 'textfield',
				hidden: true,
				id: 'customerId',
				itemId: 'customerId',
				name: 'customerId'
			},
			{
				xtype: 'textfield',
				hidden: true,
				itemId: '',
				name: 'category'
			},
			{
				xtype: 'textfield',
				hidden: true,
				name: 'emailAddress'
			},
			{
				xtype: 'textfield',
				hidden: true,
				name: 'city'
			},
			{
				xtype: 'textfield',
				hidden: true,
				name: 'state'
			},
			{
				xtype: 'textfield',
				hidden: true,
				name: 'zipcode'
			},
			{
				xtype: 'textfield',
				hidden: true,
				name: 'pictureURL'
			},
			{
				xtype: 'textfield',
				cls: 'customfield',
				height: '20%',
				hidden: true,
				html: '',
				id: 'website',
				itemId: 'website',
				style: 'font-size:4vw',
				label: '',
				labelAlign: 'top',
				labelWidth: '',
				labelWrap: true,
				name: 'website',
				required: true
			},
			{
				xtype: 'textfield',
				cls: 'customfield',
				height: '20%',
				hidden: true,
				html: '',
				id: 'websiteDisplayName',
				itemId: 'websiteDisplayName',
				style: 'font-size:4vw',
				label: '',
				labelAlign: 'top',
				labelWidth: '',
				labelWrap: true,
				name: 'websiteDisplayName',
				required: true
			},
			{
				xtype: 'picture',
				docked: 'top',
				height: '30%',
				margin: '5 5 5 5',
				flex: 5
			}
		]
	},

	getValidationErrors: function() {
		var errors = [];
		        var reqFields = this.query('field[required=true]');
		        var i = 0, ln = reqFields.length, field;
		        for (; i < ln; i++) {
		            field = reqFields[i];
		            if (!field.getValue()) {
		                errors.push(field.getLabel() + ' must be completed.');
		            }
		        }
		        console.dir(errors);
		        return errors;
	},

	setRecord: function(record) {

		this.callParent(arguments);




		if (record) {


			this.down('#businessName').setValue(record.data.businessName);
			this.down('#phoneNumber').setValue(record.data.phoneNumber);
			this.down('#address').setValue(record.data.address);
			//this.child('contactpic').setData(record.data);




		}


	}

});