// ==UserScript==
// @id             iitc-plugin-reload-portal-details@randomizax
// @name           IITC plugin: add a button to refresh portal details
// @category       Info
// @version        0.1.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Add a button so that quickly refresh portal details data.
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @grant          none
// ==/UserScript==

@@PLUGINSTART@@

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
window.plugin.reloadDetails = function() {};

window.plugin.reloadDetails.setupCallback = function() {
    addHook('portalDetailsUpdated', window.plugin.reloadDetails.addLink);
}

window.plugin.reloadDetails.addLink = function(d) {
  $('.linkdetails').append('<aside><a onclick="window.plugin.reloadDetails.reloadPortalDetails(\''+window.selectedPortal+'\')" title="Refresh portal details">Refresh</a></aside>');
}

window.plugin.reloadDetails.reloadPortalDetails = function(guid) {
  window.portalDetail.request(guid);
}

var setup = function () {
  window.plugin.reloadDetails.setupCallback();
}


// PLUGIN END //////////////////////////////////////////////////////////

@@PLUGINEND@@
