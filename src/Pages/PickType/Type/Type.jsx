import Button from "../../../common/Button/Button";
import classes from "./Type.module.scss";
let Type=(props)=>{
  return(
    <div className={classes.type}>
      <Button onClick={()=>props.onClick(props.index)}>{props.name}</Button>
    </div>
  )
}
export default Type;