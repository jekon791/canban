
export function savePosition(column){
 let keys =[]
 let positionKeys = document.querySelectorAll(`[data-columnbody]`)
 positionKeys.forEach(colm => keys.push(colm))
 let arr = []
 for(let i =0;i<keys.length;i++){
  let colnId =  keys[i].getAttribute('data-columnbody')
  arr[colnId] = [];
  for(let a=0; a<keys[i].children.length;a++){

    
    arr[colnId].push( keys[i].children[a].getAttribute('data-card'))

  }
 }




 /*for(let i=0; i< positionKeys.length;i++){
     positionKeys[i]
 }*/
 return console.log(arr)
}