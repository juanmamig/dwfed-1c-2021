const button = document.querySelector('.dark');
const p = document.querySelector('.main-content');

button.addEventListener('click', function () {
  console.log("Hicieron click en el botón");
  // p.classList.add("active");
  // p.classList.remove("active");
  p.classList.toggle("active");
});


// MODAL

// Paso 1: Selecciono los elementos del HTML mediante el querySelector

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const okModal = document.querySelector('.ok-modal');

openModal.addEventListener('click', function () {
  modal.classList.add('active');
});

function removeActive() {
  modal.classList.remove('active');
}

okModal.addEventListener('click', removeActive);