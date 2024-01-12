import classes from "./Collections.module.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import ImageOfCollection from "./ImageOfCollection/ImageOfCollection";
import { useState } from "react";
import AddNewCollection from "./AddNewCollection/AddNewCollection";
import { Urls } from './../../App';
import Popup from "../../common/Popup/Popup";
import  data  from "../../Helpers/Data";
import Verbs from "../Verbs/Verbs";
import { collectionsStore, usePickedType } from "../../Helpers/store";
let Collections=(props)=>{
  let location=useLocation();
  let navigate=useNavigate();
  const pickedType=usePickedType(state=>state.pickedType);
  debugger;
  const SetMakeNewCollection=collectionsStore[pickedType](state=>state.makeNewCollection);
  const SSetEditedCollection=collectionsStore[pickedType](state=>state.editCollection);
  const SetDeletedCollection=collectionsStore[pickedType](state=>state.deleteCollection);
  const collections=collectionsStore[pickedType](state=>state.collections);
  const unSolved=collectionsStore[pickedType](state=>state.mistakes);
  const addUnSolved=collectionsStore[pickedType](state=>state.addUnSolved);
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
    SSetEditedCollection(collection,indexOfEditedCollection);
    setShouldShowPopup(false);
  }
  useEffect(()=>{
    if(location.state !=undefined ){
      props.addUnSolvedVerbs(location.state.unSolved);
      addUnSolved(location.state.unSolved);
      if(location.state.name !=undefined){
        
        props.makeNewCollectionVerb(location.state.name,location.state.collection);
        SetMakeNewCollection(location.state.name,location.state.collection);
      }
    }
    navigate(location.pathname+location.hash ,{});
  },[])
  let htmlImagesOfCollections=collections.map((c,index)=><ImageOfCollection deleteCollection={props.deleteCollection} startEditCollection={startEditCollection} index={index} name={c.name} verbs={c.collection}/>);
  return(
    <>
      <div className={classes.collectionsWrapper}>
       <AddNewCollection onClick={()=>{navigate(Urls.verbs,{})}}/>
       {unSolved.length>0 && <ImageOfCollection  name={Urls.mistakes} index={Urls.mistakes} verbs={unSolved}/> }
      <div className={classes.collections}>
        {htmlImagesOfCollections}
      </div>
    </div>
    { shouldShowPopup && <Popup><Verbs editCollection={editCollection} isInPopup={true} collection={editedCollection} phrasalVerbs={data[pickedType].contents}/></Popup> }
    </>

  )
}
export default Collections;