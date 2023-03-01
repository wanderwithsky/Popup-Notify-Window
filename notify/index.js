
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})


const Btn = document.getElementById("#show-login")
const popUp = document.querySelector(".popup")

Btn.onclick = () => {
    popUp.classList.add("active")
}