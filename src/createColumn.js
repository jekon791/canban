import {dragOver,dropCard} from "./dragAdrop"
export function createDOMcolumn(array) {
  let fragmentColumn = document.createDocumentFragment();
  array.forEach(function(item, index) {

    //Тут записывается id колоночки
    let text_id = document.createElement("p");
    text_id.append(item.id);

    //Тут записывается title колоночки
    let text_title = document.createElement("p");
    text_title.append(item.title);
    
    //Сюда будут вставляться карточки предназначеные для этой колонки
    let body_div = document.createElement("div");
    body_div.dataset.columnbody = item.id;
    body_div.dataset.columntitle = item.title
    body_div.addEventListener("dragover", dragOver)
    body_div.addEventListener("drop", dropCard)
    
    //Весь этот мусор собирается в одну DIV_box
    let div = document.createElement("div");
    div.append(text_id, text_title);
    div.append(body_div);
    div.className = "col-sm";
    div.dataset.column = item.id;

    createOptions(item)
    fragmentColumn.appendChild(div);
  });

  return addDom(fragmentColumn);
}

//Функция ищет изначальный DIV с событием getStart и вставляет внего колоки
function addDom(fragment) {
  document.querySelector("#row").appendChild(fragment);
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