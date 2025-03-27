document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-story-button]");

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
