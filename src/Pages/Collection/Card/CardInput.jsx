import classes from "./Card.module.scss";
import data from "./../../../Helpers/Data";
import { useState } from 'react';
const CardInput=(props)=>{
  let a ="";
  a[0]=5;   
     
  return (
    <>
      <div>
        <div><div>gfgdiv  <div></div></div></div>
      </div>
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
}