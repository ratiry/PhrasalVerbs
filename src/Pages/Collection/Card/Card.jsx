import classes from "./Card.module.scss";
import Button from "./../../../common/Button/Button";
import { useEffect, useRef, useState } from "react";
import Popup from "../../../common/Popup/Popup";
let Card = (props) => {
  let input = useRef();
  let [solved, setSolved] = useState(false);
  let [retreat, setRetreat] = useState(false);
  let [shouldShowNote, setShouldShowNote] = useState(false);
  let onClick = () => {
    if (input.current.value == props.card.name) {
      setSolved(true);
    }
    setShouldShowNote(false);
    if (props.card.synonyms != undefined) {
      if (props.card.synonyms.includes(input.current.value, 0)) {
        setShouldShowNote(true);
      }
    }
  };
  let onGiveUpCLick = () => {
    setRetreat(true);
  };
  let onNextClick = () => {
    input.current.value = "";
    props.onClick(!retreat, props.card);
  };
  useEffect(() => {
    setRetreat(false);
    setSolved(false);
    setShouldShowNote(false);
  }, [props]);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.description}>
          <span> {props.card.description}</span>
        </div>
        <span>{retreat && "="}</span>
        <span>{retreat && props.card.name}</span>
        <input ref={input} type="text" />
        {shouldShowNote && <span>try to think of synonym</span>}
        <div className={classes.buttons}>
          <div onClick={onGiveUpCLick} className={classes.retreat}>
            give up
          </div>
          {!solved ? (
            <div className={classes.next + " " + classes.notSolved}>
              {" "}
              <span>→</span>{" "}
            </div>
          ) : (
            <div onClick={onNextClick} className={classes.next}>
              {" "}
              <span>→</span>{" "}
            </div>
          )}
        </div>
        <Button onClick={onClick}>Submit</Button>
      </div>
    </>
  );
};
export default Card;
