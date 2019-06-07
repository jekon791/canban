import {dragOver,dropCard} from "./dragAdrop"
export function createDOMcolumn(array) {
  let fragmentColumn = document.createDocumentFragment();
  array.forEach(function(item, index) {

    //Тут записывается id колоночки
    let textId = document.createElement("p");
    textId.append(item.id);

    //Тут записывается title колоночки
    let textTitle = document.createElement("p");
    textTitle.append(item.title);
    
    //Сюда будут вставляться карточки предназначеные для этой колонки
    let divBody = document.createElement("div");
    divBody.dataset.columnbody = item.id;
    divBody.dataset.columntitle = item.title
    divBody.addEventListener("dragover", dragOver)
    divBody.addEventListener("drop", dropCard)
    
    //Весь этот мусор собирается в одну DIV_box
    let div = document.createElement("div");
    div.append(textId, textTitle);
    div.append(divBody);
    div.className = "col-sm";
    div.dataset.column = item.id;

    createOptions(item)
    fragmentColumn.appendChild(div);
  });

  return addDom(fragmentColumn);
}

//Функция ищет изначальный DIV с событием getStart и вставляет внего колоки
function addDom(fragment) {
  document.querySelector("[data-row]").appendChild(fragment);
}

//Функция для генерации списка колонок
function createOptions(item){
  let elm = document.createElement("option")
      elm.setAttribute("value", item.id)
      //elm.dataset.column.id = item.id
      elm.append(item.title)  
      document.querySelector("#selectId").append(elm)
}




/*let arr=[1]

function scrapyard(num){

  if(num!=null){
    console.log(1)

        if(arr.indexOf(num)!=-1){
    	    console.log(2)
        }
        else
            {console.log(3)}
  }
  else
     {
      console.log(arr)
    }
}
*/