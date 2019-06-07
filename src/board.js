import { getColumn } from "./getColumn";
import { addCard, addBtn, seeOverlayPost} from "./addCard";
import { seeOverlayPatch, updateCard} from './cardPatch'

//Привязка событий по кликам
document.addEventListener('DOMContentLoaded', getStart(), false);
//document.querySelector("[data-conteiner]").addEventListener("click", getStart, { once: true });
document.getElementById("closeFormPost").addEventListener('click',seeOverlayPost)
document.getElementById("closeFormPatch").addEventListener('click',seeOverlayPatch)
document.getElementById("goPOST").addEventListener("click", addCard);
document.getElementById("goPATCH").addEventListener("click", updateCard);

function getStart() {
  getColumn();
  addBtn();
}
