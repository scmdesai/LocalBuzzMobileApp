/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

	requires: [
		'Ext.MessageBox',
		'Ext.device.Camera'
	],
	models: [
		'Contact',
		'Deal',
		'UserDetails'
	],
	stores: [
		'MyDealsStore',
		'UserDetails',
		'LocalStore',
		'MyJsonPStore'
	],
	views: [
		'contactform',
		'DealPicture',
		'ListOfDeals',
		'DealsPanel',
		'Login',
		'ChangeContactPicForm',
		'contactinfo',
		'panel',
		'UpdateDealForm',
		'CreateNewBuzzWithImage',
		'DealImage',
		'WelcomeScreen',
		'CreateNewBuzzNoImage',
		'CreateNewBuzzOption'
	],
	controllers: [
		'LocalBuzzMerchantDemo'
	],
	icon: 'icon.png',
	name: 'LocalBuzzMerchantDemo',
	startupImage: 'icon.png',

	launch: function() {

		Ext.util.Format.empty = function(value, defaultValue) {
			return !Ext.isEmpty(value) ? value : defaultValue;
		};
		Ext.util.Format.undef = function(value, defaultValue) {
			return Ext.isDefined(value) ? value : defaultValue;
		};

		var BackButtonPanel;
		    var exitApp = false;
		    BackButtonPanel = Ext.create('Ext.Panel', {
		        // fullscreen: true,
		        html: 'Press again to exit',
		        id:'BackButtonPanel',
		        itemId:'BackButtonPanel',
		        baseCls: 'x-box'


		    });
		    BackButtonPanel.setBottom('10%');
		    BackButtonPanel.setLeft('35%');

		    //BackButtonPanel.setHeight('50px');
		    BackButtonPanel.setWidth('100%');
		    BackButtonPanel.setCls('backButtonPanel');


		//Load google charts
		google.charts.load('current', {'packages':['corechart']});





		if (Ext.os.is('Android')) {




		    var intval = setInterval(function () { exitApp = false; }, 3000);
		    document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);  // add back button listener

		    function onBackKeyDown(e) {




		        if(Ext.Viewport.getActiveItem().xtype==='panel'){


					 BackButtonPanel.show();
					setTimeout(function () {BackButtonPanel.hide();}, 3000);

		            if (exitApp) {

						console.log('Exiting app');

		                clearInterval(intval);

		               navigator.app.exitApp();
		            }
		            else {
						console.log('First time Back Button pressed');
		                exitApp = true;
		                Ext.Viewport.add(BackButtonPanel);
		                BackButtonPanel.show();

		               setTimeout(function () {BackButtonPanel.hide();}, 3000);

		            }



				}

		        else if(Ext.Viewport.getActiveItem().getItemId()==='dealPicture'){


		            Ext.Viewport.getActiveItem().destroy();

		             Ext.Viewport.setActiveItem(Ext.Viewport.getComponent('DealsPanel'));

		            Ext.getStore('LocalStore').removeAt(0);
				}



		}
		}




		document.addEventListener("resume", Ext.bind(onResume, this), false);




		function onResume(e) {

		    //Ext.Msg.alert('Resume',null,null,null);
		    /* var store = Ext.getStore('MyDealsStore');
		    store.load();
		    navigator.geolocation.getCurrentPosition(function showPosition(position) {
		        Ext.getCmp('mymap').show();
		        Ext.getCmp('locationOffText').hide();
		        Ext.getCmp('lookUpZipcode').hide();
		         var store1 = Ext.getStore('MyJsonPStore');
		            store1.load();
		            store1.clearFilter();
		            store1.filterBy(function(record) {
		                var address = record.get('address');
		                var customerId;
		                $.getJSON("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + latitude + "," + longitude + "&destinations=" + address + "&key=AIzaSyDHFtBdpwHNSJ2Pu0HpRK1ce5uHCSGHKXM",
		                   function(json) {
		                       if(task){

		                        task.cancel();
		                        store.clearFilter();
		                        store.load();

		                        var store1 = Ext.getStore('calculateDistances');

		                        var stores = [];

		                      store1.each(function(record){
		                      // stores.push(record.get('customerId'));
		                          Ext.Array.include(stores,record.get('customerId'));


		});
		console.log(stores.length);

		store.filterBy(function(record){
		    return Ext.Array.indexOf(stores, record.get('customerId')) !== -1;

		}, this);





		                       }
		                    var distance = json.rows[0].elements[0].distance.value;
		                    if (distance <= 40234) {
		                        storesNearBy.add({'customerId':record.get('customerId')});

		                        return true;

		                    } else {
		                        return false;

		                    }



		                                      });
		            });



		var task = Ext.create('Ext.util.DelayedTask', function() {
		    Ext.Viewport.mask({ xtype: 'loadmask',
		                       message: "Loading Latest Buzz.." });
		}, this);
		},onError);



		    function onError(error){

		        Ext.getCmp('mymap').hide();
		        Ext.getCmp('locationOffText').show();
		        Ext.getCmp('lookUpZipcode').show();



		    }*/
		}











		Ext.create('LocalBuzzMerchantDemo.view.WelcomeScreen', {fullscreen: true});
	}

});
