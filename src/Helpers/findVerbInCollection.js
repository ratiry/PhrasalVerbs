
let findVerbInCollection=(array,el)=>{
  for(let i=0;i<array.length;i++){
    if (el.name==array[i].name){
      return true
    }
  }
  return false
}
export default findVerbInCollection;