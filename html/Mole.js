function supports_html5_storage() {
    try {
	return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
	return false;
    }
}

function loadMaps () {
    if (!supports_html5_storage()) { return false; }
    localStorage.setItem("bar", "foo");
    dump ("set it");
    return true;
}

function getWifiMonitor () {
    return Components.classes["@mozilla.org/wifi/monitor;1"]
        .getService(Components.interfaces.nsIWifiMonitor);
}

function scannerStart () {
    var wifiMonitor = getWifiMonitor ();
    wifiMonitor.startWatching (wifiListener);
}

function scannerStop () {
    var wifiMonitor = getWifiMonitor ();    
    wifiMonitor.stopWatching (wifiListener);
}