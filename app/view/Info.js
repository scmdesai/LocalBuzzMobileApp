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
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.field.Text',
        'Ext.dataview.List'
    ],

    config: {
        border: 5,
        enableSubmissionForm: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'infoBackBtn',
                        style: '',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer',
                        height: 10,
                        width: 47
                    },
                    {
                        xtype: 'component',
                        flex: 1,
                        cls: 'contact-name',
                        disabled: true,
                        html: '<b>First Name</b>',
                        itemId: 'nameTxt',
                        style: ''
                    }
                ]
            },
            {
                xtype: 'panel',
                border: '',
                docked: 'top',
                height: 162,
                scrollable: false,
                layout: {
                    type: 'hbox',
                    align: 'start',
                    pack: 'end'
                },
                items: [
                    {
                        xtype: 'contactpic',
                        docked: 'left',
                        height: '100%',
                        ui: 'light',
                        width: 127,
                        scrollable: false,
                        flex: 0.5,
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'end'
                        }
                    },
                    {
                        xtype: 'formpanel',
                        flex: 2,
                        height: 156,
                        itemId: 'myformpanel',
                        style: 'background: transparent',
                        width: '50%',
                        scrollable: false,
                        enableSubmissionForm: false,
                        layout: {
                            type: 'vbox',
                            align: 'start',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                flex: 1,
                                cls: 'icon-phone',
                                height: '30%',
                                html: '',
                                itemId: 'phoneNumber',
                                style: 'opacity : 0.5;font-size:14px;',
                                width: '100%',
                                clearIcon: false,
                                inputCls: '',
                                label: '',
                                labelWidth: '',
                                name: 'phoneNumber',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                flex: 1,
                                cls: 'icon-location',
                                height: '70%',
                                itemId: 'address',
                                style: 'opacity:0.5;font-size:14px',
                                width: '100%',
                                name: 'address',
                                readOnly: true
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'listofdeals',
                style: 'font-size: 18px'
            }
        ]
    },

    setRecord: function(record) {
        this.callParent(arguments);
        if (record) {
            var name = record.get('businessName') + ' ' + (record.get('category') || '');
           var isFavorite = record.get('isFavorite');

            this.down('#nameTxt').setHtml(name);
            //this.down('#favlist')[isFavorite ? 'addCls' : 'removeCls']('empty-star');
           // this.down('#favoriteBtn')[isFavorite ? 'addCls' : 'removeCls']('x-button-pressed');
            this.down('contactpic').setData(record.data);

            var customerId = record.get('customerId');
            var ds = Ext.StoreManager.lookup('MyDealsStore');
            ds.clearFilter() ;
            ds.filter('customerId', customerId);
            /*dealsData  = ds.getData().getAt(0);
            var dealName = 'No Deals';
            if(dealsData) {
                 dealName = dealsData.get('dealName');
            }*/
           this.down('listofdeals').setData(ds.getData()) ;



        }


    }

});