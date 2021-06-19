/*-=-=-=-= BLOCO DE FUNÇÃO PARA MENU  -=-=-=-= */
let show = true; 
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})
/*XXXXXXXX--------FIM DO BLOCO DE FUNÇÃO PARA MENU --------XXXXXXXX*/

/*-=-=-=-= BLOCO DE FUNÇÃO PARA MOUSE OVER E MOUSE OUT DO MODAL PLANO DE OURO -=-=-=-= */
let closePlanModal = document.getElementById('closePlanModal')
let goldenPlanContainer = document.querySelector('.goldenPlanContainer');
let goldenPlanModal = document.getElementById('modalPlan');
let modalLink = document.querySelector('.modalLink');
closePlanModal.addEventListener("click", () => {
    goldenPlanContainer.classList.remove('show')
});
modalLink.addEventListener('mouseover', function() {
    goldenPlanContainer.classList.add('show')
    goldenPlanModal.classList.add('fade')
});
function fadeOut() {
    goldenPlanModal.classList.remove('fade')
    goldenPlanContainer.classList.remove('show')
}
/*XXXXXXXX--------FIM DO BLOCO DE  FUNÇÃO PARA MOUSE OVER E MOUSE OUT DO MODAL PLANOD E OURO --------XXXXXXXX*/

/*-=-=-=-= BLOCO DA FUNÇÃO DE SCROLL PARA PARTE DE "FALE CONOSCO" -=-=-=-=*/
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}
let scroll = document.getElementById('scrollToBottom').addEventListener("click", (event) => {
    event.preventDefault();
    scrollTo(".more-information .section-title");
    goldenPlanContainer.classList.remove('show')
});
/*XXXXXXXX-------- FIM DA FUNÇÃO DE SCROLL PARA PARTE DE "FALE CONOSCO"--------XXXXXXXX*/


function closeModal() {
    var modal = document.querySelector('.modal');
    var modalContainer = document.querySelector('.modal-container')
    // modal.style.display = "none"
    modalContainer.classList.remove('show');
}

function handleModal() {
    var modalContainer = document.querySelector('.modal-container')
    var modal = document.querySelector('.modal')
    modalContainer.classList.add('show');
    // modal.style.display = "flex";
    // modalContainer.style.display = "flex";
    // modal.classList.add('modalAnimation')
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
/*-=-=-=-= BLOCO DA FUNÇÃO PARA O ACCORDION -=-=-=-=*/
let btnAccordion = document.querySelector('#arrowAccordion')
let hospitalAccordion = document.querySelector('.card-accordion')
let auxiliar = false;

btnAccordion.addEventListener('click', function() {
    if (document.body.clientWidth < 768) {
        if(auxiliar) {
            hospitalAccordion.style.display = 'none'
            btnAccordion.classList.remove('btnAccordion')
            btnAccordion.classList.add('btnAccordionOff')
        } else {
            hospitalAccordion.style.display = 'block'
            btnAccordion.classList.add('btnAccordion')
            hospitalAccordion.classList.add('accordion')
        }
    } else {
        var hospitalsCards = document.querySelector('.hospitals-cards');
            hospitalsCards.appendChild(hospitalAccordion);
            if(auxiliar) {
                hospitalAccordion.style.display = 'none'
                btnAccordion.classList.remove('btnAccordion')
                btnAccordion.classList.add('btnAccordionOff')
            } else {
                hospitalAccordion.style.display = 'block'
                btnAccordion.classList.add('btnAccordion')
                hospitalAccordion.classList.add('accordion')
            }
    }
    auxiliar = !auxiliar;
});
/*XXXXXXXX-------- FIM DO BLOCO DE FUNÇÃO PARA O ACCORDION--------XXXXXXXX*/
