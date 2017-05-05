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


// ***************************** HELP *********************************
function help() {
    window.alert("Fill in your ID (given by doctor) and your full name");
}

// ***************************** TIME *********************************
function addZero(i) {
	if (i < 10) {
	i = "0" + i;
	}
	return i;
}

function getTime() {
	var d = new Date();
	var x = document.getElementById("time");
	var h = addZero(d.getHours());
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	x.innerHTML = h + ":" + m + ":" + s;
}

// ************************* SERVICE REQUEST ***************************
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.timeout = 2000;
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4){
			if (xhttp.status == 200) {
				//debugger;
				//document.getElementById("res").innerHTML = xhttp.responseText;
				window.alert(xhttp.responseText);
			}else{
				window.alert("Server down.");
			}
		}
	};
	var d = new Date();
	var time = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	var date = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
	xhttp.open("GET", "http://192.0.3.130/myWebService/connect_db.php/?time=" + time + "&date=" +
																				date + "&id=" +
																				document.getElementById("id").value + "&name=" +
																				document.getElementById("name").value, true);
	xhttp.send();
}