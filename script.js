document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o "pulo" padrão do link

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // A mágica acontece aqui!
        });
    });
});
