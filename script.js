fetch("https://api.mcsrvstat.us/2/play.yourserver.com")
.then(res => res.json())
.then(data => {

document.getElementById("status").innerHTML =
data.online ? "🟢 Online" : "🔴 Offline";

document.getElementById("players").innerHTML =
data.players ? data.players.online : "0";

});