let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})

function closeModal() {
    var modal = document.querySelector('.modal');
    var modalContainer = document.querySelector('.modal-container')
    modal.style.display = "none"
    modalContainer.style.display = "none";
}

function openModal() {
    var modalContainer = document.querySelector('.modal-container')
    var modal = document.querySelector('.modal')
    modal.style.display = "flex";
    modalContainer.style.display = "flex";
    modal.classList.add('modalAnimation')
}

