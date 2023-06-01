const $btn = document.getElementById("btn_responsive");

const $items = document.querySelector(".items__navigator");

$btn.addEventListener("click",()=>{

    $items.classList.toggle("activate")

});