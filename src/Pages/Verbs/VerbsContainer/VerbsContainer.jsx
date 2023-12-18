import classes from "./VerbsCOntainer.module.scss";
let VerbsContainer=(props)=>{

  return(
    <div className={classes.verbsContainer}>
      {props.children}
    </div>
  )
}
export default VerbsContainer;