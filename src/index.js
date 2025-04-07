import "./style.css";
import GAME from "./game/main.js";

window.onload = () => {
  GAME.init();

  GAME.DOMElements.gameOverDialog
    .querySelector("button")
    .addEventListener("click", () => {
      GAME.reset();
      GAME.init();
    });

  GAME.DOMElements.settingsDialog
    .querySelector("#sound")
    .addEventListener("change", () => {
      GAME.state.soundOn = !GAME.state.soundOn;
    });

  GAME.DOMElements.settingsDialog
    .querySelector("#aiming")
    .addEventListener("change", () => {
      GAME.state.aimingEnabled = !GAME.state.aimingEnabled;
    });

  GAME.DOMElements.settingsDialog
    .querySelector("#dark-mode")
    .addEventListener("change", () => {
      GAME.state.darkModeEnabled = !GAME.state.darkModeEnabled;
      const { body } = document;
      const { field } = GAME.objects;
      const sidebar = document.querySelector(".sidebar");
      if (GAME.state.darkModeEnabled) {
        body.classList.add("dark");
        field.classList.add("dark");
        sidebar.classList.add("dark");
        GAME.options.SHADOW_COLOR = "#1a1717";
      } else {
        body.classList.remove("dark");
        field.classList.remove("dark");
        sidebar.classList.remove("dark");
        GAME.options.SHADOW_COLOR = "#cccccc";
      }
      GAME.strictClearField();
      GAME.redrawObjects();
    });

  GAME.DOMElements.newRecordDialog
    .querySelector("form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const name = e.currentTarget.name.value;
      const { score } = document.querySelector("[data-score]").dataset;
      GAME.DBManager.addRecord({ name, score, date: new Date().toISOString() });
      GAME.DOMElements.newRecordDialog.close();
      GAME.reset();
      GAME.init();
    });
};
