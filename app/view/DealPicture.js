/*
 * File: app/view/DealPicture.js
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

Ext.define('Contact.view.DealPicture', {
    extend: 'Ext.Container',
    alias: 'widget.dealpicture',

    alternateClassName: [
        'dealPicture'
    ],
    requires: [
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        fullscreen: true,
        itemId: 'dealPicture',
        layout: 'fit',
        scrollable: true,
        tpl: [
            '<img src="{dealPictureURL}" />'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'dealBackBtn',
                        style: '',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            }
        ]
    },

    setRecord: function(record) {
        //console.log(record.getData()) ;
        this.setData(record.getData()) ;
        //this.setTpl('<img src="'+record.get('dealPictureURL') +'"/>') ;
    }

});