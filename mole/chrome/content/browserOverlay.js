/**
 * MOLE namespace.
 */
if ("undefined" == typeof(MOLE)) {
  var MOLEChrome = {
    xshparams : { inn: { Building: "CSAIL", Room: "32-G914"}, out: null },
    xshparamsinitial : { inn: { Building: "CSAIL", Room: "32-G914", City: "Cambridge", State: "MA", Country: "USA", Tags: "asdf", name: "foo", description: "bar", enabled: true }, out: null }
  };
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
function MOLEChrome_BrowserOverlay() {
        this.clockUpdateTimer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
	this.addonbarinitialized = 0;
}
MOLEChrome_BrowserOverlay.prototype = {
  onLoad: function() {
  	this.clockUpdateTimer.init(this, 500, Components.interfaces.nsITimer.TYPE_REPEATING_PRECISE);
  },
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("mole-string-bundle");
    let message = stringBundle.getString("mole.random.label");

    window.alert(message);
  },
  /**
   * Says 'More' to the user.
   */
  sayMore : function(aEvent) {
    FoxClocks_openWindow("chrome://mole/content/location.xul", "mole-some-dialog", "chrome, dialog, left=600, top=400, width=300, height=400, modal, resizable=yes, scrollbars=yes, titlebar=yes");
    if (MOLEChrome.xshparams.out) {
    // User clicked ok. Process changed arguments; e.g. write them to disk or whatever
    // This branch is not taken regardless of OK or cancel.
    let stringBundle = document.getElementById("mole-string-bundle");
    let message = stringBundle.getString("mole.confirmed.label");
    window.alert(message);
    } else {
    // User clicked cancel. Typically, nothing is done here.
    // This is the branch taken regardless of OK or cancel.
    let stringBundle = document.getElementById("mole-string-bundle");
    let message = stringBundle.getString("mole.noaction.label");
    // window.alert(message);
    }},
  /**
   * Says 'About' to the user.
   */
  sayAbout : function(aEvent) {
    let stringBundle = document.getElementById("mole-string-bundle");
    let message = stringBundle.getString("mole.about.label");
    window.alert(message);
  },

  sayAbout2 : function(aEvent) {
    FoxClocks_openWindow("chrome://mole/content/about.xul", "", "chrome,modal,centerscreen,resizable=no"); },

  onTimer : function() {
	// window.alert("Tick");
	// Here is where clocks/locations should be updated
	
	var addonBar = document.getElementById("addon-bar");
	if (addonBar) {
  		if (!document.getElementById("mole-statusbarpanel-button")) {
    		var addonBarCloseButton = document.getElementById("addonbar-closebutton")
    		// addonBar.insertItem("mole-statusbarpanel-plain", addonBarCloseButton.nextSibling);
    		// addonBar.insertItem("mole-statusbarpanel-button", addonBarCloseButton.nextSibling);
    		addonBar.insertItem("mole-statusbarpanel-button");
    		addonBar.collapsed = false;
		}
	}
	document.getElementById("mole-statusbarpanel-button").setAttribute("value", (new Date()).toUTCString())
  },
  observe : function(subject, topic, data) {
	// perhaps need to eliminate other events that cause observe to be invoked
	// window.alert(subject);	// xpconnect wrapped NSITimer
	// window.alert(topic);	// timer-callback
	// window.alert(data);	// null
	this.onTimer();
  }

};
