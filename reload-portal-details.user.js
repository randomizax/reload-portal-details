// ==UserScript==
// @id             iitc-plugin-reload-portal-details@randomizax
// @name           IITC plugin: add a button to refresh portal details
// @category       Info
// @version        2.0.0.20250420.52313
// @namespace      https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL      https://randomizax.github.io/reload-portal-details/reload-portal-details.meta.js
// @downloadURL    https://randomizax.github.io/reload-portal-details/reload-portal-details.user.js
// @description    [randomizax-2025-04-20-052313] Add a button so that quickly refresh portal details data.
// @include        https://intel.ingress.com/*
// @match          https://intel.ingress.com/*
// @grant          none
// ==/UserScript==


function wrapper(plugin_info) {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

//PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
//(leaving them in place might break the 'About IITC' page or break update checks)
// plugin_info.buildName = 'randomizax';
// plugin_info.dateTimeVersion = '20250420.52313';
// plugin_info.pluginId = 'reload-portal-details';
//END PLUGIN AUTHORS NOTE



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


setup.info = plugin_info; //add the script info data to the function as a property
if(!window.bootPlugins) window.bootPlugins = [];
window.bootPlugins.push(setup);
// if IITC has already booted, immediately run the 'setup' function
if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);


