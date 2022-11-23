let button = document.querySelector("button");
let body = document.querySelector("body");
let slt = document.querySelector("h1")
let p = document.querySelector("p")
let container = document.querySelector("#container");
button.onclick = function(){
    body.style.backgroundColor = "#303b73"
    button.style.backgroundColor = "#303b73"
    button.style.color = "white"
    container.style.backgroundColor = "#6381b0"
    slt.textContent = "Dark Mode Activé!"
    button.textContent = "Je suis ton père"
    p.textContent = ""
}