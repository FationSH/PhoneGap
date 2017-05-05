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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		console.log("Device Ready");
        //app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    /* receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    } */
};

app.initialize();

// ************************** SERVICE REQUEST *****************************
function rent() {
	document.getElementById("mes").innerHTML = "searching...";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			//document.getElementById("mes").innerHTML = xmlHttp.responseText;
			//debugger;
		}
	};
	xhttp.open("GET", "http://192.0.3.130/myWebService/carent.php/?name=" + document.getElementById("name").value  + "&from=" + document.getElementById("from").valueAsDate.valueOf()/1000 + "&to=" + document.getElementById("to").valueAsDate.valueOf()/1000, true);
	xhttp.send();
}