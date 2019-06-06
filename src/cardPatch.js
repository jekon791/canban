import{ whatIsIt } from './createCards'

//Получение id карточки, её загрузки из сервере и отображение
export function loadTargetCard(e) {
  let parent = e.target.parentNode;
  parent = parent.getAttribute("data-card");
  let idCard = document.getElementById("infoIdCard");
  let idColumn = document.getElementById("infoIdColumn");
  let way = document.getElementById("titleValue");
  let btn = document.getElementById("goPATCH");

  fetch("http://localhost:8089/api/card/" + parent, { method: "GET" })
    .then(resp => resp.json())
    .then(function(item) {
      way.value = item.title;
      idCard.innerText = "id карточки" + " " + item.id;

      //Переписать. Сейчас неоткудова взять title колонки
      idColumn.innerText = "Колонка" + " " + item.title;
      btn.setAttribute("value", item.id);
    });

  seeOverlayPatch();
}

//Берёт текущее value и шлёт на сервер 
export function updateCard(e) {
  let id = e.target.value;
  let way = document.getElementById("titleValue");

  fetch("http://localhost:8089/api/card/" + id, {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ title: way.value })
  })
    .then(resp => resp.json())
    .then(function(arr){
      document.querySelector(`[data-card="${arr.id}"]`).remove()
      whatIsIt(arr)
    })
}

// Эвент клик на всплытие формы редактирование карточки
export function seeOverlayPatch() {
  let way = document.getElementById("bodyPatch");
  way.style.display == "none" ? (way.style.display = "block") : (way.style.display = "none");
}
