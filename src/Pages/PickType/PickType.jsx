import classes from "./PickType.module.scss";
import data from "../../Helpers/Data";
import Type from "./Type/Type";
import { useNavigate } from "react-router";
import { usePickedType } from "../../Helpers/store";
import { Urls } from "../../App";
let PickType = (props) => {
  let setPickedType = usePickedType((state) => state.setPickedType);
  let navigate = useNavigate();
  let onClickPick = (name) => {
    navigate("/"+name);
  };
  let types =Object.values(data).map((item, i) => {
    return <Type onClick={()=> onClickPick(item.name)} name={item.name} index={i} />;
  });
  return <div className={classes.pickType}>{types}</div>;
};
export default PickType;
