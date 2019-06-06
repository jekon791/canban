export function removeCardAndObj(e) {
  e.target.style.backgroundColor = "yellow";

  //Получаем ссылку на DIV 
  let parent = e.target.parentElement;
  
  //Запрос на удаление
  fetch("http://localhost:8089/api/card/" + parent.getAttribute("data-card"), {
    method: "DELETE"
  }).then(parent.remove());
}
