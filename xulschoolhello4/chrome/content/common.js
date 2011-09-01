// FoxClocks extension for Mozilla Firefox/Thunderbird
// Copyright (C) 2005-2011 Andy McDonald / www.stemhaus.com
// For licensing terms, please refer to readme.txt in this extension's '.xpi'
// package or its installation directory on your computer.

// ====================================================================================
const FC_REGEXP_VALID_LATDEG = /^\d{1,2}$/;
const FC_REGEXP_VALID_LONGDEG = /^\d{1,3}$/;
const FC_REGEXP_VALID_MIN_SEC =  /^\d{1,2}$/;
const FC_REGEXP_VALID_STATBARPOSN_INDEX = /^\d{1,}$/;
const FC_REGEXP_OPTIONSFORMATSTANDARD = /^options\.format\.standard\.(\d{1,})$/;
const FC_REGEXP_CUSTOMIZE_TOOLBAR = /customizeToolbar\.xul$/;

const FC_FOXCLOCKS_SETTINGS_EXTENSION = "fcl";
const FC_FOXCLOCKS_ZONEPICKER_EXTENSION = "xml";

const FC_FOXCLOCKS_SEARCH_MAX_OPEN_NODES = 8; // AFM - heuristic. Not worth a param

// AFM - make statusbar overflow like toolbars, otherwise too much content in the statusbar
// loses the vertical scrollbar. Not needed for (at least) Firefox 3, and has significant side-effects:
// see e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=370524

const FC_STATUSBAR_FIX_CSS = "statusbar#status-bar { overflow-x: hidden !important; }";

// AFM - likely to be removed
//
const FC_USE_ALIGN = true;

// ====================================================================================
// AFM - global services
//
	
// ====================================================================================
function FoxClocks_openFoxClocksWindow() { FoxClocks_openWindow("chrome://foxclocks/content/foxclocks.xul", "", "chrome,centerscreen,resizable=yes"); }
function FoxClocks_openAboutWindow() { FoxClocks_openWindow("chrome://xulschoolhello/content/about.xul", "", "chrome,modal,centerscreen,resizable=no"); }

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
function FoxClocks_DisableId(id, truth)
{
	document.getElementById(id).setAttribute("disabled", (truth ? "true" : "false"));
}
