import classes from "./Button.module.scss";
let Button=(props)=>{
  
  return(
    <button onClick={props.onClick} className={classes.button}>
      <span> {props.children}</span>
    </button>
  )
}
export default Button;