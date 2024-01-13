
function isInArray(value, array) {
  for(let i=0;i<array.length;i++){
    if(array[i].name===value){
      return true
    }
  }
  return false
}
let composeUnSolvedVerbs=(verbs,verbsData,unSolvedVerbs)=>{
  let newVerbs=[]
  debugger;
  for(let i=0;i<verbs.length;i++){
    for(let j=0;j<verbsData.length;j++){

      if(verbs[i]==verbsData[j].name  & !isInArray(verbs[i],unSolvedVerbs)){
        newVerbs.push(verbsData[j])
      }
    }
  }
  return newVerbs;
}
export default composeUnSolvedVerbs;