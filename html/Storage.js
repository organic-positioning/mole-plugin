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
