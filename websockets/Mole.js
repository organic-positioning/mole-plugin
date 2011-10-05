
function startMonitor () {

    var addr = "http://127.0.0.1:4411/";
    //var addr = "ws://localhost:4411/";
    var socket;
    // requires jQuery
    // see for different detection method
    // http://www.w3schools.com/js/js_browser.asp
    //if ( $.browser.mozilla) {
    //socket = new MozWebSocket(addr, "my-custom-protocol");
    socket = new MozWebSocket(addr);
    //} else {
    //socket = new WebSocket(addr);
    //}

    //socket.onmessage = function(event) {  
    //console.log(e.data);  
    //} 

    //socket.onclose = function()...
    //socket.onopen = function()...

    //var msg = {  
    //action: "monitor",  
    //};  
    
    //socket.send(JSON.stringify(msg));  
    socket.send("{\"action\":\"query\"}");
}