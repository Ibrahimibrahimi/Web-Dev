
var main = document.querySelector(".main");

// function that hide help ask message 
function HideHelpMessage(){
    document.querySelector(".ask-help").style.display = "none"
}

function hideloader(){
    document.querySelector("div.loader").style.display = 'none';
    document.querySelector("div.loader").innerHTML = "";
}

function load(){
    var loader = document.createElement("div");
    loader.className = "loader";
    main.appendChild(loader);

    var spanLoader = document.createElement("span");
    spanLoader.className = "loader";
    loader.appendChild(spanLoader);

    for ( var i = 0 ; i < 3 ; i++ ){
        var spanChild = document.createElement("span");
        spanLoader.append(spanChild);
    }
    setTimeout(() => {
        document.querySelector("div.loader").style.display = "none"
    }, 1000);
}


function Send(){
    var text = document.getElementById("input").value;
    // check input to avoid sending an empty message
    if (text != ""){
        HideHelpMessage();
        var div = document.createElement("div");
        div.className = "message from";
        main.appendChild(div);

        var span = document.createElement("span");
        span.className = "text";
        span.innerText = text;
        div.appendChild(span)
    }
}


function Receive(){
    var text = document.getElementById("input").value;
    // check input to avoid sending an empty message
    if (text != ""){
        HideHelpMessage();
        // add loader and wait 1s and hide it
        setTimeout(() => {
            var div = document.createElement("div");
            div.className = "message to";
            main.appendChild(div);
            
            var span = document.createElement("span");
            span.className = "text";
            span.innerText = text;
            div.appendChild(span)
        }, 1000);
    }
}












// send and receive buttons
document.querySelector(".send").onclick = () => {
    load();
    hideloader();
    Receive()
}