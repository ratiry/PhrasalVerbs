
let breakDownHash=(path,cutFrom)=>{
  let type=[];
  if(cutFrom==0){
    type= path.split("-");
  }else{
    type=path.slice(cutFrom).split("-");
    debugger;
  }
  return type.map(Number)
}
export default breakDownHash;