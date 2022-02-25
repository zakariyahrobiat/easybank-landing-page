open = document.getElementById("open");
hamburgerContainer = document.getElementById("hamburger-container")
image= document.querySelector(".image"),
close = document.getElementById("close")

open.addEventListener("click", ()=>{
    hamburgerContainer.classList.toggle("open-hamburger")
    close.style.display= "block"
    open.style.display= "none"
    image.style.display ="none"
    
})
close.addEventListener("click", ()=>{
    hamburgerContainer.className = "hamburger-container"
    close.style.display= "none"
    open.style.display= "block"
    image.style.display ="block"
})