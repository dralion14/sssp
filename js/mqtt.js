//Using the HiveMQ public Broker, with a random client Id
var client = new Messaging.Client("broker.mqttdashboard.com", 8000, "myclientid_" + parseInt(Math.random() * 100, 10));

//Gets  called if the websocket/mqtt connection gets disconnected for any reason
client.onConnectionLost = function (responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    log("connection lost: " + responseObject.errorMessage);
    client.reconnect(2000);
};

client.reconnect = function (time) {
    window.setTimeout(function () {
        client.connect(options);
    }, time);
};

//Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function (message) {
    //Do something with the push message you received
    log(message.destinationName + ' > ' + message.payloadString);

    if (message.payloadString == 'Reload') {
        Main.reload();
    } else if (message.payloadString == 'Hello') {
        Main.showDeviceInformations();
    }
    else if (message.payloadString == 'People') {
        people = true;
        emotion = 'neutro';
    }
    else if (message.payloadString == 'NoPeople') {
        people = false;
        emotion = 'neutro';
    }
    else if (message.payloadString == 'Joy') {
        emotion = 'joy';
    }
    else if (message.payloadString == 'Angry') {
        emotion = 'angry';
    }
    else if (message.payloadString == 'Sadness') {
        emotion = 'sadness';
    }
    else if (message.payloadString == 'Neutro') {
        emotion = 'neutro';
    }
};

//Connect Options
var options = {
    timeout: 3,
    //Gets Called if the connection has sucessfully been established
    onSuccess: function () {
        //log('sssp/' + Main.getDUID());
        client.subscribe('sssp/' + Main.getDUID(), { qos: 2 });
        client.subscribe('sssp/tv', { qos: 2 });
        log("Connected");
    },
    //Gets Called if the connection could not be established
    onFailure: function (message) {
        log("Connection failed: " + message.errorMessage);
        client.reconnect(1000);
    }
};
