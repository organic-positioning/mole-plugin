// FoxClocks extension for Mozilla Firefox/Thunderbird
// Copyright (C) 2005-2011 Andy McDonald / www.stemhaus.com
// For licensing terms, please refer to readme.txt in this extension's '.xpi'
// package or its installation directory on your computer.

// ====================================================================================
function FoxClocks_openWindow(url, internalName, displayFlags)
{
	try
	{
		var mediatorService = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
		var enumerator = mediatorService.getEnumerator(null);
		while (enumerator.hasMoreElements())
		{
			var currWindow = enumerator.getNext();
			currWindow = currWindow.QueryInterface(Components.interfaces.nsIDOMWindowInternal);
			
			if (url == currWindow.location.href) // rhs is chrome:// URL
			{
				currWindow.focus();
				return currWindow;
			}
		}
	}
	catch (ex) { /* do nothing */ }
	
	return window.open(url, internalName, displayFlags);
}

// ====================================================================================
