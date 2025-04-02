const titles = [
    "Python Developer", 
    "Web Developer", 
    "Data Science", 
    "Software Developer"];


let currentIndex = 0;



function trocarTituloComAnimacao() {
    const titleElement = document.getElementById("title");

    const originalTitle = "Backend Developer"; 

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


const toggleButton = document.getElementById('mode-toggle');


const header = document.getElementById('top')
const introSection = document.getElementById('intro');
const sobreSection = document.getElementById('sobre');
const projetosSection = document.getElementById('projetos')
const habilidadesSection = document.getElementById('habilidades')
const contatoSection = document.getElementById('contato')
const footer = document.getElementById('footer')


toggleButton.addEventListener('click', () => {

    introSection.classList.toggle('white-mode');
    sobreSection.classList.toggle('white-mode');
    projetosSection.classList.toggle('white-mode');
    habilidadesSection.classList.toggle('white-mode');
    contatoSection.classList.toggle('white-mode');
    header.classList.toggle('white-mode');
    footer.classList.toggle('white-mode');

});
