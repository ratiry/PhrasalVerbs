import { NavLink } from "react-router-dom";
import classes from "./ImageOfNewCollection.module.scss";
import Verb from "./../../Verbs/verb/verb";
import { Urls } from './../../../App';
let ImageOfCollection=(props)=>{
  let onClckVerb=()=>{}
  let verbs=props.verbs.map(verb => <Verb onClick={onClckVerb}>{verb.name}</Verb>)
  console.log(verbs)

  return(
    <NavLink to={Urls.collection + "#" + props.index} >
      <div className={classes.wrapper}>
        <span>{props.name}</span>
        <div className={classes.imageOfCollection}>
            {verbs}
        </div>
      </div>
    </NavLink>
  )
}
export default ImageOfCollection;
