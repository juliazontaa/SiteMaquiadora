// Sombra suave no cabeçalho ao rolar a página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
    }
});

// Ampliar fotos do portfólio ao clicar (Lightbox)
const fotosPortfolio = document.querySelectorAll('.grid-fotos img');

const modal = document.createElement('div');
modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(35, 28, 31, 0.9);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 20px;
`;

const imgAmpliada = document.createElement('img');
imgAmpliada.style.cssText = `
    max-width: 92%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.5);
`;

modal.appendChild(imgAmpliada);
document.body.appendChild(modal);

fotosPortfolio.forEach(foto => {
    foto.style.cursor = 'pointer';
    foto.addEventListener('click', () => {
        imgAmpliada.src = foto.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});