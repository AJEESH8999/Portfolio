let burgerBtn = document.querySelector(".burger-btn");
let burgerMenu = document.querySelector(".burger");

let isBurgerOpen = false;
burgerBtn.onclick = function () {
    if (isBurgerOpen) {
        burgerMenu.style.display = "none";
        burgerBtn.style.backgroundPosition = "center, center left 50px";
    } else {
        burgerMenu.style.display = "block";
        burgerBtn.style.backgroundPosition = "center left 50px, center";
    }
    isBurgerOpen = !isBurgerOpen; // toggle the state
}
