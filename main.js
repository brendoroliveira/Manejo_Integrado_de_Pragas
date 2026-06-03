document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica das Caixas dos Pilares ---
    const cards = document.querySelectorAll('.pilar-card');
    const painelDetalhe = document.getElementById('pilar-detalhe');
    const elementoTitulo = document.getElementById('detalhe-titulo');
    const elementoTexto = document.getElementById('detalhe-texto');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega os dados guardados nos atributos 'data-*' do HTML
            const titulo = card.getAttribute('data-titulo');
            const texto = card.getAttribute('data-texto');

            // Atualiza os textos do painel e o torna visível
            elementoTitulo.innerText = titulo;
            elementoTexto.innerText = texto;
            painelDetalhe.style.display = 'block';
        });
    });

    // --- Lógica do Quiz ---
    const botoesQuiz = document.querySelectorAll('.quiz-btn');
    const elementoResultado = document.getElementById('quiz-resultado');

    botoesQuiz.forEach(botao => {
        botao.addEventListener('click', () => {
            // Verifica o valor do atributo 'data-correto' (string "true" ou "false")
            const ehCorreto = botao.getAttribute('data-correto') === 'true';

            if (ehCorreto) {
                elementoResultado.innerText = "✓ Correto! O controle químico deve ser o último recurso, priorizando produtos seletivos para proteger os inimigos naturais.";
                elementoResultado.style.color = "#1b5e20"; // Verde escuro
            } else {
                elementoResultado.innerText = "✕ Incorreto. Tente novamente! Os controles biológicos e culturais devem vir antes da intervenção química.";
                elementoResultado.style.color = "#b71c1c"; // Vermelho escuro
            }
        });
    });
});