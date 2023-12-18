import classes from "./Collections.module.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import ImageOfCollection from "./ImageOfCollection/ImageOfCollection";
import { useState } from "react";
import AddNewCollection from "./AddNewCollection/AddNewCollection";
import { Urls } from './../../App';
let Collections=(props)=>{
  let location=useLocation();
  let navigate=useNavigate();
  let htmlImagesOfCollections=props.collectionsVerbs.map((c,index)=><ImageOfCollection  index={index} name={c.name} verbs={c.collection}/>);
  useEffect(()=>{
    if(location.state !=undefined ){
      props.addUnSolvedVerbs(location.state.unSolved);
      if(location.state.name !=undefined){
        
        props.makeNewCollectionVerb(location.state.name,location.state.collection);
      }
    }
    navigate(location.pathname+location.hash ,{});
  },[])

  return(
    <div className={classes.collectionsWrapper}>
       <AddNewCollection onClick={()=>{navigate(Urls.verbs,{})}}/>
       {props.unSolvedVerbs.length>0 && <ImageOfCollection name={Urls.mistakes} index={Urls.mistakes} verbs={props.unSolvedVerbs}/> }
      <div className={classes.collections}>
        {htmlImagesOfCollections}
      </div>
    </div>

  )
}
export default Collections;