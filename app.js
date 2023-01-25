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


function display_image(src, width) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = width;
    document.body.appendChild(a);
}

// query string composes the product information on the nfc tag as follows: 
// https://...index.html?product=..&prodname=..&prodid=..&cideo=https://... 

//key descriptors listed below
// product name
var product = getUrlParameter('product');
// product id
var model = getUrlParameter('model');
// product type
var prodtype = getUrlParameter('prodtype');
// product description
var prodid = getUrlParameter('prodid');
// product derial number
var prodserial = getUrlParameter('prodserial');
// install link must start with https://
var install = getUrlParameter('install');
// product specification link  must start with https://
var specify = getUrlParameter('specify');
// product maintenance guide link must start with https://
var maintain = getUrlParameter('maintain');
// installation video must start with https://
var video = getUrlParameter('video');
//product picture must start with https://...jpg or png
var pict = getUrlParameter('pict');