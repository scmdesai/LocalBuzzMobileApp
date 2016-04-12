/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
	
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
       document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		/*document.addEventListener('deviceready', function() {
    try {
        FB.init({
            appId: "900651756709444",
            nativeInterface: CDV.FB,
            useCachedDialogs: false
        });
    } catch (e) {
        alert(e);
    }
}, false);*/
    },


    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		console.log("Device is ready");
		//this.receivedEvent('deviceready');
		
		//StatusBar Overlay set to false
		//StatusBar.overlaysWebView(false);
		
		
		
		/*var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
}

facebookConnectPlugin.login(["public_profile"],
    fbLoginSuccess,
    function (error) { alert("" + error) }
);*/

		
		/* Commenting out Amazon Analytics */
		/* Amazon Mobile Analytics*/
		/*AWS.config.region = 'us-east-1';
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'us-east-1:cd2c5cf7-2b6d-49a6-be5f-5d1a92113389' //Amazon Cognito Identity Pool ID
		}); 
		var options = {
			appId : 'b8f01603ccc24b2c9d0e78b76334febe', //Amazon Mobile Analytics App ID
			platform: 'Android',
			// logger: console,  // Commented this line to get rid of the error Uncaught TypeError: Converting circular structure to JSON 
			appTitle : 'Local Buzz'              //Optional e.g. 'Example App'
    
		};

		*/
		
		

    
    }, // end of onDeviceReady function
	
    
		
  
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
  
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
  
        console.log('Received Event: ' + id);
	}		
};

app.initialize();