    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "728597627187"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });

        
        push.on('registration', function(data) {
            console.log("registration event");
            document.getElementById("regId").innerHTML = data.registrationId;
            console.log(JSON.stringify(data));
        });

    push.on('registration', function(data) {
        console.log("registration event");
        var gcm_regid = data.registrationId;
        alert(gcm_regid+'numb');

    });
        push.on('error', function(e) {
            console.log("push error");
        });
    }