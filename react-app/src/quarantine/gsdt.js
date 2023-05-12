//Code taken from Hivemq for integration and modified for my purposes
var mqtt = require('mqtt');
var fs = require('fs');

var options = {
    host: '****************', //Hivemq cloud id
    port: 8883,
    protocol: 'mqtts',
    username: '**********',//username
    password: '********'//password
}

// initialize the MQTT client
var client = mqtt.connect(options);

// setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    // called each time a message is received
    console.log('Received message:', topic, message.toString());
    createtor(message.toString());
});

// subscribe to topic 'my/test/topic'
client.subscribe('mytopic');




function createtor(message){
    

    if(message.includes("gas")){
        fs.writeFile("dt.json", message, function(err,result){
            if(err) console.log('error',err);
        })
    }

}