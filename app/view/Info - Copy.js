/*
 * File: app/view/Info.js
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

Ext.define('Contact.view.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactinfo',

    requires: [
        'Contact.view.Picture',
        'Contact.view.ListOfDeals',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.field.Text',
        'Ext.dataview.List'
    ],

    config: {
        padding: '10px',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'infoBackBtn',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'component',
                        flex: 1,
                        cls: 'contact-name',
                        html: 'First Name Last Name',
                        itemId: 'nameTxt'
                    },
                    {
                        xtype: 'button',
                        itemId: 'favoriteBtn',
                        ui: 'action',
                        iconCls: 'favorites',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'contactpic'
            },
            {
                xtype: 'textfield',
                border: '2px',
                disabled: true,
                itemId: 'emailAddress',
                label: 'Email Address',
                labelAlign: 'top',
                name: 'emailAddress',
                placeHolder: 'Email address not provided',
                readOnly: true
            },
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'phoneNumber',
                clearIcon: false,
                label: 'Phone Number',
                labelAlign: 'top',
                name: 'phoneNumber',
                readOnly: true
            },
            {
                xtype: 'textfield',
                disabled: true,
                id: 'address',
                clearIcon: false,
                label: 'Address',
                labelAlign: 'top',
                name: 'address',
                placeHolder: 'Address not provided',
                readOnly: true
            },
            {
                xtype: 'listofdeals',
                height: '38px',
                preventSelectionOnDisclose: false
            }
        ],
        listeners: [
            {
                fn: 'onFavoriteBtnTap',
                event: 'tap',
                delegate: '#favoriteBtn'
            }
        ]
    },

    onFavoriteBtnTap: function(button, e, eOpts) {
        var pressingCls = 'x-button-pressed';
        button.element.toggleCls(pressingCls);
        var isPressed = button.element.hasCls(pressingCls);
        var record = this.getRecord();
        record.set('isFavorite', isPressed);
    },

    setRecord: function(record) {
        this.callParent(arguments);
        if (record) {
            var name = record.get('businessName') + ' ' + (record.get('category') || '');
            var isFavorite = record.get('isFavorite');
            this.down('#nameTxt').setHtml(name);
            this.down('#favoriteBtn')[isFavorite ? 'addCls' : 'removeCls']('x-button-pressed');
            this.down('contactpic').setData(record.data);

            var customerId = record.get('customerId');
            var ds = Ext.StoreManager.lookup('MyDealsStore');
            ds.clearFilter() ;
            ds.filter('customerId', customerId);
            dealsData  = ds.getData().getAt(0);
            var dealName = 'No Deals';
            if(dealsData) {
                 dealName = dealsData.get('dealName');
            }
            this.down('listofdeals').setData(dealName) ;



        }


    }

});