var sendBtn = document.getElementById("Send");
var ReceiveBtn = document.getElementById("Receive");
var messages = document.getElementById("messages");
var input  = document.getElementById("text");

// create structure of message
function Send(MessageText){
    var message = document.createElement("div");
    message.className = "message to";
    messages.appendChild(message);
    var p = document.createElement("p");
    p.className = "text";
    p.innerText = MessageText;
    message.appendChild(p);
}

function Receive(MessageText){
    var message = document.createElement("div");
    message.className = "message from";
    messages.appendChild(message);

    var p = document.createElement("p");
    p.className = "text";
    p.innerText = MessageText;
    message.appendChild(p);
}

sendBtn.onclick = () => {
    if (!input.value == ""){
        Send(input.value)
    }
    input.value = "";
}
ReceiveBtn.onclick = () => {
    if (!input.value == ""){
        Receive(input.value)
    }
    input.value = "";
}