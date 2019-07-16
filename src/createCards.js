import { dragStart } from "./dragAdrop";
import { removeCardAndObj } from "./removeCardAndObj";
import { loadTargetCard } from "./cardPatch";
import { chekForPositionNumber, editPositionCard} from "./positionCard";

//Эта функция нужна для отделния массива от обьекта
//Ф-я createCard работает только с обьектами
export function whatIsIt(item) {
  if (Array.isArray(item) == true) {
    item.forEach(item => chekForPositionNumber(item));
  } else {
    chekForPositionNumber(item);
  }
}

export function createCard(item) {
  //Сама карточка
  let divBox = document.createElement("div");
  divBox.setAttribute("draggable", "true");
  divBox.dataset.card = item.id;
  divBox.dataset.positionInColumn = item.position;
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

  // Пуш карточки в DOM. По правилу функция должна быть маленькой, но она знает слишком много -
  // что-бы разделять её на две части (фомирующая карточку / встывляющая в DOM)
  let columnBody = document.querySelector(
    `[data-columnbody="${item.columnId}"]`
  );

  //Тут вроде идёт проверка position и растановка карточек по порядку(после приминения претира, я сам не понимаю что тут написано)
  if (columnBody.children.length === 0) {
    console.log("Если columnBody пустой");
    columnBody.insertAdjacentElement("afterbegin", divBox);
  } 
    else {
    
      for (let i = 0; i < columnBody.children.length; i++) {
        if ( item.position < columnBody.children[i].getAttribute("data-position-in-column")  )
        {
          console.log('Если item.position меньше children.position');
          columnBody.children[i].insertAdjacentElement("beforeBegin", divBox);
          break
        }
          else {
                    if ( columnBody.children[i].getAttribute("data-position-in-column") === item.position )
                        {
                          console.log('Если карточки имеют одинаковый position');
                        item.position + 1;
                        columnBody.children[i].insertAdjacentElement("afterEnd", divBox);
                        break
                        } 
                          else {
                            console.log('Если item.position самый большой ');
                            columnBody.children[i].insertAdjacentElement("afterEnd", divBox);
                          }
          }
        }
      } 
}
