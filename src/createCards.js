import{dragStart} from "./dragAdrop"
import { removeCardAndObj } from "./removeCardAndObj";
import { loadTargetCard } from "./cardPatch"


export function whatIsIt(item) {
  if (Array.isArray(item) == true) {
    item.forEach(item => createCards(item));
  } else {
    createCards(item);
  }
};


function createCards(item) {

  //Сама карточка
  let div_box = document.createElement("div");
  div_box.setAttribute("draggable", "true");
  div_box.dataset.card = item.id;
  div_box.className = "col-sm";
  div_box.addEventListener("dragstart",dragStart)

  //Тасочка
  let div_content = document.createElement("div");
  div_content.className = "content";

  //Текст тасочки
  let p_content = document.createElement("p");
  p_content.className = "textContent";
  p_content.append(item.title);

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
  div_content.append(p_content);

  //Вложение всего в карточку
  div_box.append(btn);
  div_box.append(btnEdit);
  div_box.append(div_content);

  //Пуш карточки в DOM
  document
    .querySelector(`[data-columnbody="${item.columnId}"]`)
    .appendChild(div_box);
}
