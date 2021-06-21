/*-=-=-=-= BLOCO DE FUNÇÃO PARA HEADER FIXO  -=-=-=-= */
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("header")
var sticky = header.offsetTop;
function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
    }
/*XXXXXXXX--------FIM DO BLOCO DE FUNÇÃO PARA HEADER FIXO --------XXXXXXXX*/

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

/*-=-=-=-= BLOCO DA FUNÇÃO DE ABRIR E FECHAR MODAL -=-=-=-=*/
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
/*XXXXXXXX-------- FIM DA FUNÇÃO DE LIDAR COM O MODAL--------XXXXXXXX*/


/*-=-=-=-= BLOCO DA FUNÇÃO DE LIDAR COM ACCORDION (COLLAPSE) DO HOSPITAL -=-=-=-=*/
let btnToggle = document.querySelector('.collapse-btn');
let collapsedContainer = document.querySelector('.collapsed-container');
let aux = false;
btnToggle.addEventListener('click', function() {
    if(document.body.clientWidth < 690) {
        if(aux) {
            collapsedContainer.style.display = 'none'
            btnToggle.innerHTML = "Veja a cobertura completa"
        } else {
            collapsedContainer.style.display = 'flex';
            btnToggle.innerHTML = "Fechar"
            collapsedContainer.classList.add('accordion')
        }
    } else {
            var collapseContainer = document.querySelector('.collapse-container');
            var hospitalList = document.querySelector('.hospital-list');
            var accommodation = document.querySelector('.accommodation-box');
            var li = document.querySelector('.hospital-ul-li');
            collapseContainer.appendChild(hospitalList);
            collapseContainer.appendChild(accommodation);
        if(aux) {
            collapsedContainer.style.display = 'none'
            hospitalList.style.display = 'none'
            accommodation.style.display = 'none'
            btnToggle.innerHTML = "Veja a cobertura completa"
        } else {
            collapsedContainer.style.display = 'flex';
            hospitalList.style.display = 'flex'
            accommodation.style.display = 'flex'
            
            li.style.border = "none";
            btnToggle.innerHTML = "Fechar"
            collapsedContainer.classList.add('accordion')
        }
    }
    aux = !aux;
});
/*XXXXXXXX-------- FIM DO BLOCO DE FUNÇÃO PARA O ACCORDION (COLLAPSE) DO HOSPITAL--------XXXXXXXX*/




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
                hospitalAccordion.style.display = 'flex'
                btnAccordion.classList.add('btnAccordion')
                hospitalAccordion.classList.add('accordion')
                
                
            }
    }
    auxiliar = !auxiliar;
});
/*XXXXXXXX-------- FIM DO BLOCO DE FUNÇÃO PARA O ACCORDION--------XXXXXXXX*/


/*-=-=-=-= BLOCO DA FUNÇÃO PARA AJUSTE DE PLACEHOLDER -=-=-=-=*/
if (document.body.clientWidth > 768) {
    document.getElementsByName('name')[0].placeholder='Insira aqui seu nome.';
    document.getElementsByName('telephone')[0].placeholder='insira aqui o seu telefone.';
    document.getElementsByName('email')[0].placeholder='insira aqui o seu e-mail.';
} else {
    document.getElementsByName('name')[0].placeholder='Seu nome.';
    document.getElementsByName('telephone')[0].placeholder='(DDD) 99999-9999.';
    document.getElementsByName('email')[0].placeholder='seuemail@email.com.';
}
/*XXXXXXXX-------- FIM DO BLOCO DE FUNÇÃO PARA AJUSTE DO PLACEHOLDER--------XXXXXXXX*/