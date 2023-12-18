import Button from "../../../common/Button/Button"
import classes from "./PopupInterior.module.scss";
import { useRef } from 'react';
let PopupInterior=(props)=>{
  let input=useRef();
  let onClick=()=>{
    props.onClick(input.current.value);
  }
  return(
    <div className={classes.popupInterior}>
      <input ref={input} placeholder="choose name of collection" type="text" />
      <Button onClick={onClick}>Choose</Button>
    </div>
  )
}
export default PopupInterior;