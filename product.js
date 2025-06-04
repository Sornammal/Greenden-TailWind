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

// product search container
let productContainer = document.getElementById("product-container")

let search = document.getElementById("search")

let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    let enteredValue = this.value.toUpperCase()
    for(count=0;count<productList.length; count++){

        let productname = productList[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue) < 0){
            productList[count].style.display = "none";
        }
        else{
            productList[count].style.display= "block"; 
        }
    }
})