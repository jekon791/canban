import {whatIsIt} from './createCards'
import {savePosition} from './test'
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
        seeOverlayPost()
}

//Создание и размещение кнопки addBtn для добавки карточек
export function addBtn(){
    let testBtn = document.createElement("button")
        testBtn.append("test Btn")
        testBtn.addEventListener("click", savePosition)
        document.body.insertBefore(testBtn , document.body.firstChild)

    let btn = document.createElement("button")
        btn.append("Add card")
        btn.addEventListener("click", preparation)
        document.body.insertBefore(btn , document.body.firstChild)
}
//Эвент клик для кнопки addBtn на всплытие формы
export function preparation(e){
    e.preventDefault()
    seeOverlayPost()
}
export function seeOverlayPost(){
    let way = document.getElementById("bodyPost")
    way.style.display == "none" ? way.style.display = 'block' :  way.style.display = 'none'  
}