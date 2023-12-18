import classes from "./AddnewCollection.module.scss";
let AddNewCollection=(props)=>{
  return(
    <div onClick={props.onClick} className={classes.AddNewCollection} >
      +
    </div>
  )
}
export default AddNewCollection;