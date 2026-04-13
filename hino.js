// LETRA DO HINO //

const popup = document.getElementById('popup-hino');
const destaques = document.querySelectorAll('.destaque');
destaques.forEach(palavra => {
    palavra.addEventListener('mouseenter', (e) => {
        const significado = e.target.getAttribute('data-significado');
        if (significado) {
            popup.innerText = significado;
            popup.classList.add('ativo');
        }
    });
    palavra.addEventListener('mousemove', (e) => {

        popup.style.left = e.clientX + 'px';
        popup.style.top = e.clientY + 'px';
    });
    palavra.addEventListener('mouseleave', () => {
        popup.classList.remove('ativo');
    });

    // TIMELINE //

});
const modal = document.getElementById('modal-container');
const modalTitulo = document.getElementById('modal-titulo');
const modalTexto = document.getElementById('modal-texto');
const btnFechar = document.getElementById('fechar-modal');

// Seleciona todos os botões "Read More"
document.querySelectorAll('.btn-mais').forEach(botao => {
    botao.addEventListener('click', () => {

        const tituloCard = botao.parentElement.querySelector('h1').innerText;

        const detalhe = botao.getAttribute('data-info');

        modalTitulo.innerText = tituloCard;
        modalTexto.innerHTML = detalhe;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('visivel'), 10);
    });
});

btnFechar.onclick = () => {
    modal.classList.remove('visivel');
    setTimeout(() => modal.style.display = 'none', 300);
};

window.onclick = (e) => {
    if (e.target == modal) btnFechar.onclick();
};