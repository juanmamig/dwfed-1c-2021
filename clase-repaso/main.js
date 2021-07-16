const textos = {
  titulo: {
    es: "Mi Web",
    en: "My Website",
    it: "Pizza"
  }
}


console.log(navigator.userAgent);

const box = document.querySelector('.translate');

window.addEventListener("resize", function() {      
  if (window.matchMedia("(min-width: 1024px)").matches) { 
    window.addEventListener('scroll', function(){
      // box.style.transform = `translateY(${window.scrollY*-1}px)`;
      box.style.transform = 'translateY(' + window.scrollY*-1 + 'px)';
    });
  }
});

const buttonsLang = document.querySelectorAll('.btn-lang');
const h1 = document.querySelector('h1');

function changeH1Text(lang) {
    h1.textContent = textos.titulo[lang];
}

buttonsLang.forEach(function(el) {
  el.addEventListener('click', function(infoEvent){
    const lang = infoEvent.target.textContent.toLowerCase();
    changeH1Text(lang);
  });
});
