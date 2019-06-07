import { dragStart } from "./dragAdrop";
import { removeCardAndObj } from "./removeCardAndObj";
import { loadTargetCard } from "./cardPatch";

//Эта функция нужна для отделния массива от обьекта
//Ф-я createCard работает только с обьектами
export function whatIsIt(item) {
  if (Array.isArray(item) == true) {
    item.forEach(item => createCard(item));
  } else {
    createCard(item);
  }
}

function createCard(item) {
  //Сама карточка
  let divBox = document.createElement("div");
  divBox.setAttribute("draggable", "true");
  divBox.dataset.card = item.id;
  divBox.className = "col-sm";
  divBox.addEventListener("dragstart", dragStart);

  //Тасочка
  let divContent = document.createElement("div");
  divContent.className = "content";

  //Текст тасочки
  let pContent = document.createElement("p");
  pContent.className = "textContent";
  pContent.append(item.title);

  let btnEdit = document.createElement("button");
  btnEdit.className = "deleteBox";
  btnEdit.append("Edit");
  btnEdit.addEventListener("click", loadTargetCard);

  //Кнопка удаления карточки
  let btn = document.createElement("button");
  btn.className = "deleteBox";
  btn.append("X");
  btn.addEventListener("click", removeCardAndObj);

  //Вложение текста тасочки в её тело
  divContent.append(pContent);

  //Вложение всего в карточку
  divBox.append(btn);
  divBox.append(btnEdit);
  divBox.append(divContent);

  //Пуш карточки в DOM
  document
    .querySelector(`[data-columnbody="${item.columnId}"]`)
    .appendChild(divBox);
}
