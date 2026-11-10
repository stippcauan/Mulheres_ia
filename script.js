document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('ativo');
        });
    }

    // Marca o link ativo no menu conforme a URL
    const links = document.querySelectorAll('.menu a');
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('ativo');
        }
    });
});