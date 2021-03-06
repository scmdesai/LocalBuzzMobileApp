/*
 * File: app/store/UserPreferences.js
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

Ext.define('Contact.store.UserPreferences', {
	extend: 'Ext.data.Store',

	requires: [
		'Contact.model.UserPreferences',
		'Ext.data.proxy.LocalStorage'
	],

	config: {
		autoLoad: true,
		autoSync: true,
		model: 'Contact.model.UserPreferences',
		remoteFilter: true,
		storeId: 'UserPreferences',
		proxy: {
			type: 'localstorage',
			batchActions: false,
			id: ''
		}
	}
});