/*
general idea : 
1. spans are created by js using foreach (make it by html but use querySelecotrAll)
2. span.onclick = () => if data-selected=="true" return it to false , else return it to true
3. if delete button clicked , make querySelectorAll("span[data-selected = 'true']") and make a foreach => finnaly delete them (just make display : none)

*/

var container = document.querySelector(".container");

// select all spans 
var spans = document.querySelectorAll("span");
spans.forEach(span=> {
    span.onclick = () => {
        if ( span.getAttribute("data-select") == "false" ){
            span.setAttribute("data-select","true")
        }else {
            span.setAttribute("data-select","false")
        }
    }
})

// if "8" pressed , make all spans blues 
document.addEventListener("keypress",(event)=>{
    if (event.key == "8"){
        document.querySelectorAll("span[data-select='true']").forEach(p=>{
            p.style.background = "blue";
            // or you can delete them 
            // p.style.display = 'none'
        })

        // after deleting or changing backgrounds => deselect all 
        document.querySelectorAll("span[data-select='true']").forEach(io=>{
            io.setAttribute("data-select","false")
        })
    }
})