'use strict';
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
var prodname = getUrlParameter('prodname');
var prodtype = getUrlParameter('prodtype');
var product = getUrlParameter('product');
var prodid = getUrlParameter('prodid');
var prodserial = getUrlParameter('prodserial');
var install = getUrlParameter('install');
var specify = getUrlParameter('specify');
var maintain = getUrlParameter('maintain');