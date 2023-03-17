let elBtn = document.querySelector(".ham-btn")
let elList = document.querySelector(".logo-list")

elBtn.addEventListener("click",function() {
    elList.classList.toggle("active")
    console.log(elList);
})