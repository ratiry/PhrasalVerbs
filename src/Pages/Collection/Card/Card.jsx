import classes from "./Card.module.scss";
import Button from "./../../../common/Button/Button";
import { useEffect, useRef, useState } from "react";
import Popup from "../../../common/Popup/Popup";
import CardInput from "./CardInput";
import CardGaps from "./CardGaps";
let Card = (props) => {
  return (
    <>
      {props.type !="prepositions" && <CardInput card={props.card} onClick={props.onClick} />}
      {props.type=="prepositions" && <CardGaps card={props.card} onClick={props.onClick}/>}
    </>
  );
};

export default Card;
