
function startMonitor () {

    //var url = "http://localhost.localdomain:4411";
    var url = "http://localhost:4411";
    //var request = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
	//.createInstance(Components.interfaces.nsIXMLHttpRequest);

    var request;
    try {
	request = new XMLHttpRequest();
    } catch (e) {
	window.alert("Could not create XMLHttpRequest");
	return;
    }
    request.open('POST', url, true);
    //request.overrideMimeType("text/xml");

    var msg = {  
	action: "query",  
    };  


    request.onreadystatechange = function(event) {
	if (request.readyState == 4) {  
            var responseText = event.target.responseText;
	    console.log('text', responseText);  
	}
    }



    request.send(JSON.stringify(msg));
    //request.send("sdsdfsdfsdfsd");

}