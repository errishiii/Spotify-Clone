const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(hamburgerMenu.style.display ==="flex"){
        hamburgerMenu.style.display = "none";
        hamburgerBtn.querySelector("img").src = "svg/hamburger.svg";
    } else{
        hamburgerMenu.style.display = "flex";
        hamburgerBtn.querySelector("img").src = "svg/close.svg";
    }
});
document.addEventListener("click",(e)=>{
    if(!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)){
        hamburgerMenu.style.display = "none";
        hamburgerBtn.querySelector("img").src = "svg/hamburger.svg";
    }
});