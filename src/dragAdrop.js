
//let id = 0;
export function dragStart(e){
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData('idCard', e.target.getAttribute("data-card"))
    //id = e.target.getAttribute("data-card")
    
}

export function dragOver(e){
    e.preventDefault()
}

    //Ужс....
export function dropCard(e){  
    let targetElement = e.target
    let dragblCard = document.querySelector(`[data-card ="${e.dataTransfer.getData('idCard')}"]`)

    //Если drop произошёл мимо карточки(или в самой карточке, по children)
    if (targetElement.getAttribute("data-card") == null){

            //Drop произошёл мимо колонки ?
            if(targetElement.getAttribute("data-columnbody")==null){

                //Таоке могло произойти только из-за поподания по card.childElem (я без понятия, как с этим бороться)
                let searchCard = targetElement.closest("div[data-card]")
                    movingCardAfter(searchCard.getAttribute("data-card"))

                }
            else{      
                    //Drop произошёл в колонке(пробовать найти ближайшую карточку)
                    //Если колонка пустая
                    if(e.target.childNodes.length === 0){
                        e.target.append(dragblCard)
                        }
                    else{
                        //Попробуем найти карточку
                        let el = document.elementFromPoint(e.clientX, (e.clientY - 15))
                        console.log(el)
                        el.getAttribute('data-card')===null ? e.target.append(dragblCard) : movingCardAfter(el.getAttribute('data-card'))
                        }
                }
        }
    else{
        //Drop произошёл в карточке
        //Делю карточку пополам и узнаю в какой части был таргер
        let targeCardId=e.target.getAttribute("data-card")
        positionClick(targeCardId)
        
    }

    function positionClick(id){
        let posClickInElement = (e.offsetY === undefined) ? e.layerY : e.offsetY
        let halfElem =targetElement.getBoundingClientRect().height/2
        posClickInElement < halfElem ? movingCardBefore(id) : movingCardAfter(id)
        
    }
    function movingCardBefore(onDroptCardId){
            let onDroptCard = document.querySelector(`[data-card="${onDroptCardId}"]`)
            onDroptCard.insertAdjacentElement('beforebegin',dragblCard)
    }
    function movingCardAfter(onDroptCardId){
            let onDroptCard = document.querySelector(`[data-card="${onDroptCardId}"]`)
            onDroptCard.insertAdjacentElement('afterend',dragblCard)
    }




/*
    let dragblCardId = e.dataTransfer.getData('idCard')
   if(e.target.getAttribute("data-columnbody")== null ){
       let column = e.target.closest("div[data-columnbody]")
       column.append(document.querySelector(`[data-card="${dragblCardId}"]`))
   }else{ 
       let column = e.target
       column.append(document.querySelector(`[data-card="${dragblCardId}"]`))
    }
   return false;
   */
}