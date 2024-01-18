import classes from "./Button.module.scss";
let Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span> {props.children}</span>
    </button>
  );
};
export let ButtonWithIcon = (props) => {
  return (
    <button onClick={props.onClick} className={classes.buttonWithIcon}>
      {props.children}
    </button>
  );
};
export default Button;
