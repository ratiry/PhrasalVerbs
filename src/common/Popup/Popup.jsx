import classes from "./Popup.module.scss";
let Popup = (props) => {
  return (
    <>
      <div className={classes.popup}>{props.children}</div>
      <div className={classes.black}></div>
    </>
  );
};
export default Popup;
