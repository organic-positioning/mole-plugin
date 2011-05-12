
var MAX_SCAN_INDEX = 60;
var MAX_READING_INDEX = 50;

function Reading () {
    this.mac = "";
    this.ssid = "";
    this.signal = 0;
    
}

function Scan () {
    this.timestamp = new Date;
    this.readings = new Array (MAX_READING_INDEX);
    this.readingsCount = 0;
    for (var i = 0; i < MAX_READING_INDEX; i++) {
	this.readings[i] = new Reading ();
    }
}

function Scanner () {
    this.currentScanIndex = -1;
    this.scans = new Array (MAX_SCAN_INDEX);
    for (var i = 0; i < MAX_SCAN_INDEX; i++) {
	this.scans[i] = new Scan ();
    }
}

Scanner.prototype =
    {

	onChange: function (accessPoints)
	{
	    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

	    this.currentScanIndex++;
	    if (this.currentScanIndex >= MAX_SCAN_INDEX) {
		this.currentScanIndex = 0;
	    }
	    var scan = this.scans[this.currentScanIndex];
	    for (var i=0; i<accessPoints.length && i<MAX_SCAN_INDEX; i++) {
		var a = accessPoints[i];
		var reading = scan.readings[i];
		reading.mac = a.mac;
		reading.ssid = a.ssid;
		reading.signal = a.signal;
	    }
	    scan.readingsCount = accessPoints.length;
	    if (accessPoints.length > MAX_SCAN_INDEX ) {
		scan.readingsCount = MAX_SCAN_INDEX;
	    }
	    console.log ("Scanner added new scan index=", this.currentScanIndex, " readings=", scan.readingsCount);
	    //alert("Scanner added new scan");
	},

	onError: function (value) {
	    alert("scanner error: " +value);
	},

	QueryInterface: function(iid) {
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
            if (iid.equals(Components.interfaces.nsIWifiListener) ||
		iid.equals(Components.interfaces.nsISupports))
		return this;
            throw Components.results.NS_ERROR_NO_INTERFACE;
	},
    }

function startScanner () {
    netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

    var scanner = new Scanner();
    var wifi_service = Components.classes["@mozilla.org/wifi/monitor;1"].getService(Components.interfaces.nsIWifiMonitor);
    wifi_service.startWatching(scanner);
    console.log ("startScanner finished");
}


