const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const panel = document.querySelector(".mobileNavBox");

btnOpen.addEventListener("click",function(){
    panel.classList.remove("hidden");
    btnClose.classList.remove("hidden");
    btnOpen.classList.add("hidden");
})

btnClose.addEventListener("click",function(){
    panel.classList.add("hidden");
    btnClose.classList.add("hidden");
    btnOpen.classList.remove("hidden");
})