var app = {
    checkSMSPermission: function() {
        var success = function (hasPermission) { 
            if (hasPermission) {
                sms.send(...);
            }
            else {
                // show a helpful message to explain why you need to require the permission to send a SMS
                // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    },
    requestSMSPermission: function() {
        var success = function (hasPermission) { 
            if (!hasPermission) {
                sms.requestPermission(function() {
                    console.log('[OK] Permission accepted')
                }, function(error) {
                    console.info('[WARN] Permission not accepted')
                    // Handle permission not accepted
                })
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    }
};