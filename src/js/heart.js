var element = document.getElementById("svg_heart");

if (window.localStorage.getItem("heartOn")) {  
    element.classList.add("selected");
}

function toggleSelected() {
    var element = document.getElementById("svg_heart");
    element.classList.toggle("selected");
    window.localStorage.setItem("heartOn", element.classList.contains("selected"));
}