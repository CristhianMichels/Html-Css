const botao = document.getElementById('botao-tema');
const body = document.body;
const icone = botao.querySelector('.material-symbols-outlined');

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');


// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo === true) {
    body.classList.add('escuro');

    icone.textContent = 'wb_sunny';
  } else {
    body.classList.remove('escuro');

    icone.textContent = 'dark_mode';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});