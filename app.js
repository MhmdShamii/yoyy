
let noBtn = document.querySelector(".no");
let yesBtn = document.querySelector(".yes");
let yessBtn = document.querySelector(".yess");


noBtn.addEventListener("click",()=>{
    document.querySelector(".yesInteraction").classList.toggle("hidden")
})
yesBtn.addEventListener("click",()=>{
    document.querySelector(".noInteraction").classList.toggle("hidden")
})
yessBtn.addEventListener("click",()=>{
    document.querySelector(".shngalna").classList.toggle("hidden")
})
