// Called once when the dialog displays
function onLoad() {
  // Use the arguments passed to us by the caller
//  document.getElementById("Building").value = window.arguments[0].inn.Building;
//  document.getElementById("Room").value = window.arguments[0].inn.Room;
//  document.getElementById("City").value = window.arguments[0].inn.City;
//  document.getElementById("State").value = window.arguments[0].inn.State;
//  document.getElementById("Country").value = window.arguments[0].inn.Country;
//  document.getElementById("Tags").value = window.arguments[0].inn.Tags;
//  document.getElementById("name").value = window.arguments[0].inn.name;
//  document.getElementById("description").value = window.arguments[0].inn.description;
//  document.getElementById("enabled").checked = window.arguments[0].inn.enabled;
}

// Called once if and only if the user clicks OK
function onCANCEL() {
}
function onOK() {
   // Return the changed arguments.
   // Notice if user clicks cancel, window.arguments[0].out remains null
   // because this function is never called
   window.arguments[0].out = {
	Building:document.getElementById("Building").value,
	Room:document.getElementById("Room").value,
	City:document.getElementById("City").value,
	State:document.getElementById("State").value,
	Country:document.getElementById("Country").value,
	Tags:document.getElementById("Tags").value,
	name:document.getElementById("name").value,
        description:document.getElementById("description").value,    
        enabled:document.getElementById("enabled").checked};
   return true;
}
