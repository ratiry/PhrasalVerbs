
const makeDate=()=>{
    const today=new Date();
    const minute=today.getMinutes();
    const hour=today.getHours();
    const day=today.getDate();
    const month=today.getMonth();
    return minute+"/"+hour+"/"+day+"/"+month
}
export default makeDate;