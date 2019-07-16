import { createCard } from "./createCards";

export function chekForPositionNumber(item) {
    if (item.position === undefined) {
        let lengthColumnBody = document.querySelector(`[data-columnbody="${item.columnId}"]`).children.length;
        item.position = lengthColumnBody + 1;
        editPositionCard(item, item.position)
    } else {
      createCard(item);
    }
  }

export function editPositionCard(item, position){
    console.log(item)
    fetch("http://localhost:8089/api/card/" + item.id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ position: position })
    })
      .then(resp => resp.json())
      .then(createCard(item));
}