import{whatIsIt} from "./createCards"
export function getCard() {
  return fetch("http://localhost:8089/api/card", { method: "GET" })
    .then(res => res.json())
    .then(array=>whatIsIt(array))
}