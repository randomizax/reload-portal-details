// ==UserScript==
// @id             iitc-plugin-reload-portal-details@randomizax
// @name           IITC plugin: add a button to refresh portal details
// @category       Info
// @version        2.0.0.@@DATETIMEVERSION@@
// @namespace      https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL      @@UPDATEURL@@
// @downloadURL    @@DOWNLOADURL@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Add a button so that quickly refresh portal details data.
// @include        https://intel.ingress.com/*
// @match          https://intel.ingress.com/*
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
