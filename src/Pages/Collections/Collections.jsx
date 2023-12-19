import classes from "./Collections.module.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import ImageOfCollection from "./ImageOfCollection/ImageOfCollection";
import { useState } from "react";
import AddNewCollection from "./AddNewCollection/AddNewCollection";
import { Urls } from './../../App';
import Popup from "../../common/Popup/Popup";
import { phrasalVerbs } from "../../Helpers/Data";
import Verbs from "../Verbs/Verbs";
let Collections=(props)=>{
  let location=useLocation();
  let navigate=useNavigate();
  let [shouldShowPopup,setShouldShowPopup]=useState(false);
  let [editedCollection,setEditedCollection]=useState([]);
  let [indexOfEditedCollection,setIndexOfEditedCollection]=useState(0);
  let startEditCollection=(collection,index)=>{
    setShouldShowPopup(true);
    setEditedCollection(collection);
    setIndexOfEditedCollection(index);
  }
  let editCollection=(collection)=>{
    props.editCollection(collection,indexOfEditedCollection);
    setShouldShowPopup(false);
  }
  useEffect(()=>{
    if(location.state !=undefined ){
      props.addUnSolvedVerbs(location.state.unSolved);
      if(location.state.name !=undefined){
        
        props.makeNewCollectionVerb(location.state.name,location.state.collection);
      }
    }
    navigate(location.pathname+location.hash ,{});
  },[])
  let htmlImagesOfCollections=props.collectionsVerbs.map((c,index)=><ImageOfCollection deleteCollection={props.deleteCollection} startEditCollection={startEditCollection} index={index} name={c.name} verbs={c.collection}/>);
  return(
    <>
      <div className={classes.collectionsWrapper}>
       <AddNewCollection onClick={()=>{navigate(Urls.verbs,{})}}/>
       {props.unSolvedVerbs.length>0 && <ImageOfCollection  name={Urls.mistakes} index={Urls.mistakes} verbs={props.unSolvedVerbs}/> }
      <div className={classes.collections}>
        {htmlImagesOfCollections}
      </div>
    </div>
    { shouldShowPopup && <Popup><Verbs editCollection={editCollection} isInPopup={true} collection={editedCollection} phrasalVerbs={phrasalVerbs}/></Popup> }
    </>

  )
}
export default Collections;