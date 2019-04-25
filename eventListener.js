
function sendMSG(msg){
  navigator.serviceWorker.controller.postMessage("Client 1 says '"+F+"'");
}
document.getElementById("testButton").addEventListener('click', sendMSG)
