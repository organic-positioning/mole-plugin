
function MacDesc () {
    // map from strength to rssi value
    this.rssis = {};
}

function Signature () {
    this.macDesc = {}
}

function Localizer () {

}

Localizer.prototype =
{

    // make localizer listen for new scans, then perform a localization using the most recent k scans

    // localization process:

    // make sure we have more than zero spaces to localize against

    // zero out current signature
    // go back k scans, adding their rssi values to the user's signature

    // more from localizer.cpp ....

}