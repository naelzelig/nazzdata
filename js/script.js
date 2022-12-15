var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var usdt = document.getElementById("tether");
var doge = document.getElementById("dogecoin");
var ada = document.getElementById("cardano");
var btcmarket = document.getElementById("bitcoin-market");
var ethmarket = document.getElementById("ethereum-market");
var usdtmarket = document.getElementById("tether-market");
var dogemarket = document.getElementById("dogecoin-market");
var adamarket = document.getElementById("cardano-market");
var btchour = document.getElementById("bitcoin-hour");
var ethhour = document.getElementById("ethereum-hour");
var usdthour = document.getElementById("tether-hour");
var dogehour = document.getElementById("dogecoin-hour");
var adahour = document.getElementById("cardano-hour");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdogecoin%2Ccardano&vs_currencies=usd&include_market_cap=true&include_24hr_change=true",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    doge.innerHTML = response.dogecoin.usd;
    ada.innerHTML = response.cardano.usd;
    btcmarket.innerHTML = response.bitcoin.usd_market_cap;
    ethmarket.innerHTML = response.ethereum.usd_market_cap;
    usdtmarket.innerHTML = response.tether.usd_market_cap;
    dogemarket.innerHTML = response.dogecoin.usd_market_cap;
    adamarket.innerHTML = response.cardano.usd_market_cap;
    btchour.innerHTML = response.bitcoin.usd_24h_change;
    ethhour.innerHTML = response.ethereum.usd_24h_change;
    usdthour.innerHTML = response.tether.usd_24h_change;
    dogehour.innerHTML = response.dogecoin.usd_24h_change;
    adahour.innerHTML = response.cardano.usd_24h_change;
});