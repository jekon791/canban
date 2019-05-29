import {whatIsIt} from './createCards'
export function addCard(e){
    e.preventDefault()
    let form = document.getElementById('formPOST')
    fetch("http://localhost:8089/api/card",{
        method: "POST",
        headers: {  'Accept': 'application/json',
                    'Content-Type': 'application/json' },
        body: JSON.stringify({ columnId: parseInt(form.columnId.value,10), title: form.title.value })
        })
        .then(res=>res.json())
        .then(array=>whatIsIt(array))
}

//Создание и размещение кнопки addBtn для добавки карточек
export function addBtn(){
    let btn = document.createElement("button")
        btn.append("Add card")
        btn.addEventListener("click", seeOverlayPost)
        document.body.insertBefore(btn , document.body.firstChild)
}
//Эвент клик для кнопки addBtn на всплытие формы
export function seeOverlayPost(e){
    e.preventDefault()
    let way = document.getElementById("bodyPost")
    way.style.display == "none" ? way.style.display = 'block' :  way.style.display = 'none'  
}