import { whatIsIt } from "./createCards";

//Получение id карточки, её загрузки из сервере и отображение
export function loadTargetCard(e) {
  let parentBtn = e.target.parentNode;
  let cardId = parentBtn.getAttribute("data-card");
  let idCard = document.getElementById("infoIdCard");
  let idColumn = document.getElementById("infoIdColumn");
  let way = document.getElementById("titleValue");
  let btn = document.getElementById("goPATCH");

  fetch("http://localhost:8089/api/card/" + cardId, { method: "GET" })
    .then(resp => resp.json())
    .then(function(item) {
      way.value = item.title;
      idCard.innerText = "id карточки" + " " + item.id;

      //Переписать. Сейчас неоткудова взять title колонки
      let getTitleColumn = parentBtn
        .closest("[data-columntitle]")
        .getAttribute("data-columntitle");
      //console.log(getTitleColumn);
      idColumn.innerText = "Колонка" + " " + getTitleColumn;
      btn.setAttribute("value", item.id);
    });

  seeOverlayPatch();
}

//Берёт текущее value и шлёт на сервер
export function updateCard(e) {
  let id = e.target.value;
  let elTextArea = document.getElementById("titleValue");

  fetch("http://localhost:8089/api/card/" + id, {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ title: elTextArea.value })
  })
    .then(resp => resp.json())
    .then(function(arr) {
      editCard(arr);
      seeOverlayPatch();
    });
}

// Эвент клик на всплытие формы редактирование карточки
export function seeOverlayPatch() {
  let elDivPatch = document.getElementById("bodyPatch");
  elDivPatch.style.display == "none"
    ? (elDivPatch.style.display = "block")
    : (elDivPatch.style.display = "none");
}
//Изменение текста карточки в DOM
function editCard(arr) {
  let elParagrafInCard = document
    .querySelector(`[data-card='${arr.id}']`)
    .querySelector(".textContent");
  elParagrafInCard.innerHTML = arr.title;
}
