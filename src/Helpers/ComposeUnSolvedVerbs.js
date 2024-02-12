function isInArray(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === value) {
      return true;
    }
  }
  return false;
}
let composeUnSolvedVerbs = (verbs, unSolvedVerbs) => {
  let newVerbs = [];
  for(let i=0;i<verbs.length;i++){
    let shouldAdd=true;
    for(let j=0;j<unSolvedVerbs.length;j++){
      if(unSolvedVerbs[j].name==verbs[i].name){
        shouldAdd=false;
      }
    }
    if(shouldAdd){
      newVerbs.push(verbs[i]);
    }
  }
  return newVerbs;
};
export default composeUnSolvedVerbs;
