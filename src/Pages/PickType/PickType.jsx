import classes from "./PickType.module.scss";
import data from "../../Helpers/Data";
import Type from "./Type/Type";
import { useNavigate } from "react-router";
import { usePickedType } from "../../Helpers/store";
import { Urls } from "../../App";
let PickType = (props) => {
  let setPickedType = usePickedType((state) => state.setPickedType);
  let navigate = useNavigate();
  let onClickPick = (index) => {
    setPickedType(index);
    navigate(Urls.collections + "#" + index);
  };
  let types = data.map((type, i) => {
    return <Type onClick={onClickPick} name={type.name} index={i} />;
  });
  return <div className={classes.pickType}>{types}</div>;
};
export default PickType;
