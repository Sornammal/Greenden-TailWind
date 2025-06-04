// seleccting side nav and menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})

let closeicon = document.getElementById("close-nav")

closeicon.addEventListener("click",function(){
    sidenav.style.right="-50%";
})