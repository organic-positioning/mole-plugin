
// current thinking: return area signatures as json (currently they are in xml) and have them directly converted into javascript objects.
// after they are fetched, they shoud be saved to the local object store.
// Perhaps this thing should "listen" for static signature maps to fetch.
// Maybe this should be renamed "Network.js"

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
