document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-story-button]");
  const array = document.querySelectorAll("[data-array-title]");

  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight;

  //Programação da barra de navegação
  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosHeader();
    } else {
      exibeElementosHeader();
    }
  });

  //Programação de alternação de abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const abaAlvo = botao.target.dataset.storyButton;
      const aba = document.querySelector(`[data-story-id=${abaAlvo}]`);
      hideStorys();
      aba.classList.add("story-select--is-active");
      removeActive();
      if (buttons[i].classList.contains("button--hero")) {
        buttons[i].classList.add("button--hero--is-active");
      } else {
        buttons[i].classList.add("button--dark--is-active");
      }
    });
  }

  //Programação dos arrays
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", toggleArray);
  }
});

function hideStorys() {
  const storys = document.querySelectorAll("[data-story-id]");
  for (let i = 0; i < storys.length; i++) {
    storys[i].classList.remove("story-select--is-active");
  }
}

function removeActive() {
  const buttons = document.querySelectorAll("[data-story-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button--hero--is-active");
    buttons[i].classList.remove("button--dark--is-active");
  }
}

function toggleArray(elemento) {
  const classe = "arreys__list__item--is-active";
  const elementoPai = elemento.target.parentNode;

  elementoPai.classList.toggle(classe);
}

function exibeElementosHeader() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function ocultaElementosHeader() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}
