import classes from "./AddnewCollection.module.scss";
let AddNewCollection=(props)=>{
  return(
    <div onClick={props.onClick} className={classes.AddNewCollection} >
      <span>+</span>
    </div>
  )
}
export default AddNewCollection;