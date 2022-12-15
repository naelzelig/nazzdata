var ape1 = document.getElementById("apecoin");
var flow1 = document.getElementById("flow");
var ape2 = document.getElementById("apecoin-price");
var flow2 = document.getElementById("flow-price");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ape%2Cflow%2Cchz%2Cmana%2Cimx%2Cens&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    ape1.innerHTML = response.ape.usd_24h_vol;
    flow1.innerHTML = response.flow.usd_market_cap;
    ape2.innerHTML = response.ape.usd;
    flow2.innerHTML = response.flow.usd;
});