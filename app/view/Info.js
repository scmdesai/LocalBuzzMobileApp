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
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Panel',
        'Ext.field.TextArea'
    ],

    config: {
        height: '100%',
        style: 'background:#fff',
        ui: 'dark',
        hideOnMaskTap: false,
        layout: 'vbox',
        modal: false,
        scrollable: true,
        enableSubmissionForm: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'infoBackBtn',
                        style: 'font-size:6vw',
                        ui: 'plain',
                        text: 'Back'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        itemId: 'favbutton',
                        style: 'font-size:7vw',
                        ui: 'plain'
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
                        itemId: 'nameTxt',
                        style: 'font-size:6vw'
                    }
                ]
            },
            {
                xtype: 'panel',
                border: '',
                height: 160,
                margin: '5 5 5 5',
                maxHeight: '100%',
                minHeight: '100%',
                minWidth: '',
                padding: '5 5 5 5',
                style: 'background:#fff',
                layout: {
                    type: 'vbox',
                    align: 'end'
                },
                items: [
                    {
                        xtype: 'contactpic',
                        border: '',
                        docked: 'left',
                        height: 160,
                        maxHeight: '100%',
                        minHeight: '50%',
                        minWidth: '30%',
                        ui: 'light',
                        width: '100%',
                        scrollable: false,
                        flex: 0.5,
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'center'
                        }
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '',
                margin: '15 15 15 15',
                maxHeight: '100%',
                minHeight: '100%',
                width: '80%',
                items: [
                    {
                        xtype: 'textfield',
                        cls: [
                            'icon-phone',
                            'customfield'
                        ],
                        disabled: true,
                        height: '',
                        itemId: 'phoneNumber',
                        maxHeight: '30%',
                        minHeight: '',
                        style: 'font-size:4vw;',
                        clearIcon: false,
                        name: 'phoneNumber',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        cls: [
                            'icon-location',
                            'customfield'
                        ],
                        disabled: true,
                        height: '100%',
                        itemId: 'address',
                        maxHeight: '100%',
                        minHeight: '100%',
                        clearIcon: false,
                        name: 'address',
                        readOnly: true,
                        maxRows: 3
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, e) {




                    //Ext.Viewport.getActiveItem().destroy();
                    var view = Ext.Viewport.add({xtype:'DealsPanel'});
                    Ext.Viewport.setActiveItem(view);
                    Ext.get('phoneNumber').disable();
                    Ext.get('address').disable();

                },
                margin: '5 5 5 5',
                style: 'border:none',
                ui: 'confirm',
                text: 'Latest Buzz!'
            }
        ],
        listeners: [
            {
                fn: 'onFavbuttonTap',
                event: 'tap',
                delegate: '#favbutton'
            }
        ]
    },

    onFavbuttonTap: function(button, e, eOpts) {
                var store = Ext.getStore('UserPreferences');
                //store.clearFilter();
                var pressingCls = 'x-button-pressed';
                button.element.toggleCls(pressingCls);
                var isPressed = button.element.hasCls(pressingCls);
                var record = this.getRecord();
                var customerId = record.get('customerId');

                 store.add({'customerId':customerId,'isFavorite':isPressed});

                if(isPressed===true){
                    button.setCls('fill-star');
                   // localStorage.setItem('customerId',record.get('customerId'));
                   // localStorage.setItem('isFavorite', isPressed);
                   // store.add({'customerId':customerId,'isFavorite':isPressed});
                  //  store.sync();

                }
                else {
                    button.setCls('empty-star');

                   // localStorage.removeItem('customerId');
                   // localStorage.removeItem('isFavorite

                    store.findRecord('customerId',customerId).destroy();
                    store.sync();





                }

        //console.log(customerId + isPressed);



        record.set('isFavorite', isPressed);
        store.sync();





    },

    setRecord: function(record) {

        this.callParent(arguments);


        if (record) {


            var name = record.get('businessName');
            var isFavorite = record.get('isFavorite');
            var customerId = record.get('customerId');

            Ext.get('phoneNumber').enable();
            Ext.get('address').enable();


            var store = Ext.getStore('UserPreferences');

            if(store.getAllCount()!==0){
                store.each(function(rec) {
                    if(rec.get('customerId')==customerId) {
                        isFavorite = rec.get('isFavorite');
                    }
                });
            }


            //console.log(customerId + isFavorite );
            this.down('#nameTxt').setHtml(name);
            // console.log(store.getData());
            if(isFavorite===true) {
                this.down('#favbutton').setCls('fill-star');
                //store.setData({'isFavorite':isFavorite});
            }
            else {
                this.down('#favbutton').setCls('empty-star');




            }




            // this.down('#favoriteview')[isFavorite ? 'addCls' : 'removeCls']('x-button-pressed');
            this.down('#favbutton')[isFavorite ? 'addCls' : 'removeCls']('x-button-pressed');
            this.down('contactpic').setData(record.data);


            /* var ds = Ext.StoreManager.lookup('MyDealsStore');
            ds.clearFilter() ;
            ds.filter('customerId', customerId);
            this.down('listofdeals').setData(ds.getData()) ;*/





            /*dealsData  = ds.getData().getAt(0);
            var dealName = 'No Deals';
            if(dealsData) {
                 dealName = dealsData.get('dealName');
            }*/






        }

        var ds = Ext.StoreManager.lookup('MyDealsStore');
                ds.clearFilter() ;
                ds.filter('customerId', customerId);


    }

});