//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	document.getElementById("estado").innerHTML=valor;
	alert("Historial de sensor");
	console.log("Historial de sensor");
  
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "bpoaquizam@gmail.com",
    password: "bpoaquizam96",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado_");
    client.subscribe("bpoaquizam@gmail.com/Test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "bpoaquizam@gmail.com/Test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	 var separacion=",";
	  var Sensorestado="0";
		console.log("onMessageArrived:"+message.payloadString);
		Sensorestado=message.payloadString.split(separacion);
		document.getElementById("sensor").innerHTML=Sensorestado[0];
		valor=Sensorestado-1;
  }
 