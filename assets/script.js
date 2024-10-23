// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para mostrar a imagem em fullsize
document.querySelectorAll('.clickable').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('fullImage');
        const captionText = document.getElementById('caption');
        
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Fechar o modal quando o usuário clicar no botão de fechar
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
});

// Função para destacar a seção ativa no menu
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Ajuste para o menu fixo
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Alternar o menu hambúrguer em dispositivos móveis
document.querySelector('.menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links > li > a').forEach(el => {
    el.addEventListener('click', function() {
        document.querySelector('.nav-links.active').classList.toggle('active');
    });
});
