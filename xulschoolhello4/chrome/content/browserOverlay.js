/**
 * XULSchoolChrome namespace.
 */
if ("undefined" == typeof(XULSchoolChrome)) {
  var XULSchoolChrome = {
    xshparams : { inn: { Building: "CSAIL", Room: "32-G914"}, out: null },
    xshparamsinitial : { inn: { Building: "CSAIL", Room: "32-G914", City: "Cambridge", State: "MA", Country: "USA", Tags: "asdf", name: "foo", description: "bar", enabled: true }, out: null }
  };
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
XULSchoolChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.greeting.label");

    window.alert(message);
  },
  /**
   * Says 'More' to the user.
   */
  sayMore : function(aEvent) {
    FoxClocks_openWindow("chrome://xulschoolhello/content/location.xul", "xulschoolhello-some-dialog", "chrome, dialog, left=600, top=400, width=300, height=400, modal, resizable=yes, scrollbars=yes, titlebar=yes");
    if (XULSchoolChrome.xshparams.out) {
    // User clicked ok. Process changed arguments; e.g. write them to disk or whatever
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.greeting.label");

    window.alert(message);
    } else {
    // User clicked cancel. Typically, nothing is done here.
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.greeting.label");

    window.alert(message);
    }},
  /**
   * Says 'About' to the user.
   */
  sayAbout : function(aEvent) {
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.about.label");

    window.alert(message);
  },

  sayAbout2 : function(aEvent) {
    FoxClocks_openWindow("chrome://xulschoolhello/content/about.xul", "", "chrome,modal,centerscreen,resizable=no"); }
};

   /*  window.openDialog("chrome://xulschoolhello/content/mydialog.xul", "xulschoolhello-some-dialog", "chrome, dialog, modal, resizable=yes", XULSchoolChrome.xshparams).focus();
*/
    // window.open("chrome://xulschoolhello/content/mydialog.xul", "xulschoolhello-some-dialog", "chrome, left=600, top=400, width=400, height=200, modal, resizable=yes, scrollbars=yes, titlebar=yes");
    // window.openDialog("chrome://xulschoolhello/content/mydialog.xul", "xulschoolhello-some-dialog", "chrome, dialog, centerscreen, modal, resizable=yes, scrollbars=yes, titlebar=yes", XULSchoolChrome.xshparams).focus();
    // window.openDialog("chrome://xulschoolhello/content/mydialog.xul", "xulschoolhello-some-dialog", "chrome, dialog, modal, resizable=yes", XULSchoolChrome.xshparams).focus();
