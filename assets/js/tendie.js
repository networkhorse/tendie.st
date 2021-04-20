(function () {
    var qr = document.getElementById("qr");
    var eth = document.getElementById("eth");
    var ethAddress = "0xB896acbf249FA48482aD5BdbC7A7446E471BAF15";
    var btc = document.getElementById("btc");
    var btcAddress = "3AbcoKPXJ5WiBeebrLokLVX8m8FDg2Ww5h";
    var crypto = document.getElementById("crypto");
    var address = document.getElementById("address");

    var ethImage = "assets/img/eth.png";
    var btcImage = "assets/img/btc.png";

    eth.addEventListener("click", function (e) {
        e.preventDefault();
        qr.src = ethImage;
        crypto.innerText = "Ethereum";
        address.innerText = ethAddress;
        eth.classList.add("selected");
        btc.classList.remove("selected");
    });

    btc.addEventListener("click", function (e) {
        e.preventDefault();
        qr.src = btcImage;
        crypto.innerText = "Bitcoin";
        address.innerText = btcAddress;
        eth.classList.remove("selected");
        btc.classList.add("selected");
    });
})();