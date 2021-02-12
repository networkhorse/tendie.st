var tendieUrl = "https://tendie.st/tendies";
var result = document.getElementById("result");
var avgPrice = parseFloat(document.getElementById("avg_price").innerText);
var currentPrice = document.getElementById("current_price");
var qty = parseFloat(document.getElementById("qty").innerText);

function refreshResult(price) {
    currentPrice.innerText = "$" + price;
    var change = ((avgPrice*qty)-(price*qty)).toFixed(2);
    if (price > avgPrice) {
        result.innerHTML = '<span class="stonks">$' + -change + '</span>';
    } else {
        result.innerHTML = '<span class="oof">-$' + change + '</span>';
    }
}

function updateTable() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xhr.responseText);
            var closePrices = response["chart"]["result"][0]["indicators"]["quote"][0]["close"];
            refreshResult(closePrices[closePrices.length - 1]);
        }
    }
    xhr.open("GET", tendieUrl, true);
    xhr.send(null);
}

updateTable();
setInterval(updateTable, 60000);