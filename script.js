document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica do Tema Claro/Escuro
    const btnTema = document.getElementById('btn-tema');
    const temaSalvo = localStorage.getItem('tema');

    // Aplica o tema salvo no localStorage se existir
    if (temaSalvo) {
        document.documentElement.setAttribute('data-tema', temaSalvo);
        atualizarIconeTema(btnTema, temaSalvo);
    }

    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const temaAtual = document.documentElement.getAttribute('data-tema');
            const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';
            
            document.documentElement.setAttribute('data-tema', novoTema);
            localStorage.setItem('tema', novoTema);
            atualizarIconeTema(btnTema, novoTema);
        });
    }

    function atualizarIconeTema(botao, tema) {
        if (botao) {
            botao.textContent = tema === 'escuro' ? '☀️' : '🌙';
        }
    }

    // 2. Menu mobile toggle
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.menu a');

    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            const estaAtivo = menu.classList.toggle('ativo');
            btnMenu.classList.toggle('ativo');
            btnMenu.setAttribute('aria-expanded', estaAtivo);
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('ativo');
                btnMenu.classList.remove('ativo');
                btnMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Marca o link ativo no menu conforme a URL
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('ativo');
        }
    });
});