import {useRef} from "react";
import {useState, useEffect} from "react";
import classes from "./Card.module.scss";
import Button from "../../../common/Button/Button";
import React from "react";
const CardGaps = (props) => {
  const inputs = Array(props.card.description.split("_").length - 1)
    .fill(0)
    .map((i) => React.createRef());
  let [solved, setSolved] = useState(false);
  let [retreat, setRetreat] = useState(false);
  const task = props.card.description.split("_").map((item, index) => {
    return (
      <>
        <p>{item}</p>
        {index != props.card.description.split("_").length - 1 && (
          <input ref={inputs[index]} type="text" />
        )}
      </>
    );
  });
  let onClick = () => {
    let shouldCheck = true;
    let string = "";
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].current === "") {
        shouldCheck = false;
        break;
      } else {
        string = string + inputs[i].current.value;
      }
    }
    debugger;
    if (shouldCheck & (string == props.card.answer)) {
      setSolved(true);
    }
  };
  let onGiveUpCLick = () => {
    setRetreat(true);
  };
  let onNextClick = () => {
    for(let i=0;i<inputs.length;i++){
      inputs[i].current.value="";
    }
    props.onClick(!retreat, props.card);
  };
  useEffect(() => {
    setRetreat(false);
    setSolved(false);
  }, [props]);

  return (
    <>
      <div className={classes.card}>
        <div className={classes.description}>{task}</div>
        <span>{retreat && "="}</span>
        <span>{retreat && props.card.name}</span>
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
export default CardGaps;
