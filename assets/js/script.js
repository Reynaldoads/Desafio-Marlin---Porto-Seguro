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
let btnToggle = document.querySelector('.collapse-btn');
let collapsedContainer = document.querySelector('.collapsed-container');
let aux = false;
btnToggle.addEventListener('click', function() {
if(aux) {
    collapsedContainer.style.display = 'none'
    btnToggle.innerHTML = "Veja a cobertura completa"
} else {
    collapsedContainer.style.display = 'flex';
    btnToggle.innerHTML = "Fechar"
    collapsedContainer.classList.add('accordion')
}
    aux = !aux;
});

let btnAccordion = document.querySelector('#arrowAccordion')
let hospitalAccordion = document.querySelector('.card-accordion')
let auxiliar = false;
btnAccordion.addEventListener('click', function() {
    if(auxiliar) {
        hospitalAccordion.style.display = 'none'
        btnAccordion.classList.remove('btnAccordion')
        btnAccordion.classList.add('btnAccordionOff')
    } else {
        hospitalAccordion.style.display = 'block'
        btnAccordion.classList.add('btnAccordion')
    }
    auxiliar = !auxiliar;
});

var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };