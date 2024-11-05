const titles = [
    "Desenvolvedor Python", 
    "Desenvolvedor Web", 
    "Cientista de Dados", 
    "Desenvolvedor de Software"];


let currentIndex = 0;



function trocarTituloComAnimacao() {
    const titleElement = document.getElementById("title");

    const originalTitle = "Desenvolvedor Backend"; 

    titleElement.style.animation = 'fade 1s forwards';

    setTimeout(() => {
        
        if (currentIndex >= titles.length) {
            titleElement.textContent = originalTitle; 
            currentIndex = 0; 
        } else {
            titleElement.textContent = titles[currentIndex];
            currentIndex++;
        }

        titleElement.style.animation = 'fadeIn 1s forwards'; 
    }, 1000);
}

setInterval(trocarTituloComAnimacao, 3000);


const textos = document.querySelectorAll('.texto');

function verificarVisibilidade() {
    const viewportHeight = window.innerHeight;

    textos.forEach(texto => {
        const rect = texto.getBoundingClientRect();

        // Verifica se o texto está na viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
            texto.classList.add('aparecer');
        }
    });
}


window.addEventListener('scroll', verificarVisibilidade);

verificarVisibilidade();


document.querySelectorAll('.carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelector('.imagens');
    const totalImagens = imagens.children.length;
    let indice = 0;
    let intervalo;

    function mostrarImagem() {
        indice = (indice + 1) % totalImagens;
        imagens.style.transform = `translateX(-${indice * 600}px)`;
    }

    
    function iniciarIntervalo() {
        intervalo = setInterval(mostrarImagem, 3000);
    }

    
    function pararIntervalo() {
        clearInterval(intervalo);
    }

    carrossel.addEventListener('mouseenter', pararIntervalo);
    carrossel.addEventListener('mouseleave', iniciarIntervalo);

    iniciarIntervalo();
});