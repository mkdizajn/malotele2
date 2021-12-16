// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript console.

(function() {
	"use strict";

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);

	function onDeviceReady() {
		/* Initialize sms-receive plugin */
		document.getElementById('out').innerHTML = 'nemam sms receive?';
		console.log( 'startam dev monitor..' )
		SMSReceive.startWatch();
		console.log( typeof SMSReceive );

		if(typeof (SMSReceive) === 'undefined') {
		} else {
			document.getElementById('out').innerHTML = 'sjedim i cekam sms — rijeci "nastavi" i "13880" u poruci ako postoje .. onda idemo auto sms :)';

      sms.requestPermission();

			// Initialize incoming SMS event listener
			document.addEventListener('onSMSArrive', function(e) {
				var stiglo = e.data;
				var txt = stiglo.body;
				document.getElementById('out').innerHTML = txt ;
				if( txt.toLowerCase().indexOf('dodatne naplate') > -1 ){

					// put little timeout, just in case :)
					setTimeout( function(){
		        if(SMS) SMS.sendSMS( '13880', 'Nastavi', function(){
			        	console.log('saljem auto sms')
			        }, function(){
			        	console.log('nemam "hasPermission" prava za slanje..')
		        });
					}, 2600);

				} // end lookup
			});

		}
	};

})();