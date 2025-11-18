document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 
});

sections.forEach(section => {
    observer.observe(section);
});

const projectName="Projeto Soma";
const year="2025";
const isPublished = true;

console.log("Iniciando nosso laboratório de aprendizado!");
console.log("Nome do Projeto:", projectName);
console.log("Ano de Lançamento:", year)
console.log("Está publicado?", isPublished);

const message = "O" + " " + projectName + " " + "foi lançado com sucesso em" + " " + year;
console.log(message)

function setDynamicYear() {
    console.log("A Função 'seDynamicYear' foi chamada!");
    
    const yearSpan = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    
    if (yearSpan){
        yearSpan.textContent = currentYear;
        console.log("O ano atual é:", currentYear);
        console.log("Ano inserido no rodapé com sucesso!")
    } else {
        console.log("Erro: Elemento com id 'current-year' não foi encontrado.")
    }
}

setDynamicYear();

const alertButton = document.getElementById('alert-button');
const bodyElement = document.body;

function toggleAlertMode(){
    console.log("Botão de alerta clidado!")
    if (bodyElement.classList.contains('alert-mode')) {
        bodyElement.classList.remove('alert-mode');
        console.log("Modo alerta DESATIVADO.");
    } else {
        bodyElement.classList.add('alert-mode');
        console.log("Modo de alerta ATIVADO.");
    }
}

alertButton.addEventListener('click', toggleAlertMode);