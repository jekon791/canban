
//let id = 0;
export function dragStart(e){
    e.dataTransfer.effectAllowed='move';
    e.dataTransfer.setData('idCard', e.target.getAttribute("data-card"))
    //id = e.target.getAttribute("data-card")
    
}

export function dragOver(e){
    e.preventDefault()
}
export function dropCard(e){
    let targetCardId = e.dataTransfer.getData('idCard')
   if(e.target.getAttribute("data-columnbody")== null ){
       let column = e.target.closest("div[data-columnbody]")
       column.append(document.querySelector(`[data-card="${targetCardId}"]`))
   }else{ 
       let column = e.target
       column.append(document.querySelector(`[data-card="${targetCardId}"]`))
    }
   return false;
}