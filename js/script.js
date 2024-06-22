/* menu sanduiche */
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons/menu-close.svg";
    }
}

/* efeito maquina de escrever */
var textChar = document.querySelector("#text");
var text = textChar.innerHTML;
textChar.innerHTML = '';  // Limpa o conteúdo inicial
var index = 0;

const write = () => {
    if (text.length > index) {
        textChar.innerHTML = text.substring(0, index + 1);  // Adiciona o próximo caractere
        index++;
        setTimeout(write, 45);
    } else {
        textChar.innerHTML = text;  // Garante que o texto completo está presente
    }
}

write();