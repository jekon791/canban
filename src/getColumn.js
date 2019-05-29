
import {createDOMcolumn} from "./createColumn"
import {getCard} from "./getCads"
export function getColumn(){
  fetch("http://localhost:8089/api/column",{method:"GET"})
    .then(response => response.json())
    .then(array=>createDOMcolumn(array))
    .then(getCard())
}