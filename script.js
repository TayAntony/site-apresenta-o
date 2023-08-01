function openModalFromSVG(groupId) {
  const modal = document.getElementById("modal");
  const fade = document.getElementById("fade");
  const modalGuilherme = document.getElementById("modalGuilherme")
  const modalRadija = document.getElementById("modalRadija")
  const modalBeatriz = document.getElementById("modalBeatriz")
  const modalTayssa = document.getElementById("modalTayssa")
  const modalGrazielly = document.getElementById("modalGrazielly")

  if (modal && fade && groupId) {
    if (groupId == 'naely') {
      modal.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'gui') {
      modalGuilherme.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'rai') {
      modalRadija.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'bia'){
      modalBeatriz.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'tay'){
      modalTayssa.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
    if (groupId == 'grazi'){
      modalGrazielly.classList.toggle("hide");
      fade.classList.toggle("hide");
    }
  } else {
    console.error("Elementos não encontrados no DOM.");
  }
}

// Adicione um event listener para receber mensagens do arquivo SVG
var teste = '';
window.addEventListener("message", function (event) {
  if (event.data.type === "openModal") {
    console.log(event.data);
    openModalFromSVG(event.data.id);
    teste = event.data.id
  }
  else {
    console.log('else');
    console.log(event.data);
  }
});

// FECHAR O MODAL

const closeModalButton = document.getElementById("close-modal")
const fade = document.getElementById("fade");
const modal = document.getElementById("modal");

const toggleModal = (teste) => {
  if (teste == 'naely') {
    modal.classList.toggle("hide")
  }
  if (teste == 'gui') {
    modalGuilherme.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
  if (teste == 'rai') {
    modalRadija.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
  if (teste == 'bia') {
    modalBeatriz.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
  if (teste == 'grazi') {
    modalGrazielly.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
  if (teste == 'tay') {
    modalTayssa.classList.toggle("hide")
  }
  fade.classList.toggle("hide");
};

[fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal(teste));
});

