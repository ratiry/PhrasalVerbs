import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import makingCards from './../../Helpers/MkingCards';
import Card from "./Card/Card";
import  classes  from './collection.module.scss';
import shuffle from './../../Helpers/shuffle';
import Button from "../../common/Button/Button";
import { useNavigate } from 'react-router-dom';
import Popup from "../../common/Popup/Popup";
import PopupInterior from "./PopupInterior/PopupInterior";
import { Urls } from './../../App';

let Collection=(props)=>{
  let location=useLocation();
  let [shouldShowCard,setShouldShowCard]=useState(false);
  console.log(location)
  let [memmoCollection,setMemmooCollection]=useState([]);
  let [cards,setCards]=useState([]);
  let [isExistingCollection,setIsExsistingCollection]=useState(false);

  useEffect(()=>{
    if(location.state==undefined & location.hash!=""){
      if(location.hash.slice(1)!=Urls.mistakes){
        let index= Number(location.hash.slice(1));
        setIsExsistingCollection(true);
        if(Number(location.hash.slice(1)) <props.collectionsVerbs.length){
          setCards(shuffle (makingCards(( props.collectionsVerbs[index ].collection))))
          setMemmooCollection(props.collectionsVerbs[index ].collection )
        }
      }else{
        setCards(shuffle (makingCards(( props.unSolvedVerbs))))
        setMemmooCollection(props.unSolvedVerbs )
      }
    }else if( location.state != undefined& location.state.collection !=undefined){
      setCards(shuffle(makingCards(location.state.collection)))   ;
      setMemmooCollection(location.state.collection);
    }
  },[])
  useEffect(()=>{
    if(cards.length>0){

      setShouldShowCard(true);
    }
  },[cards])
  window.cards=cards;
  let [count,setCount]=useState(0);
  let [endSession,setEndSession]=useState(false);
  let [unSolved,setUnsolved]=useState([]);
  let [shouldShowPopup,setShoulsShowPopup]=useState(false);
  let [name,setName]=useState("");
  let navigate=useNavigate();
  let [shouldShowToCollectionButton,setShouldShowToCollection]=useState(false);
  let onClickPopup=(name)=>{
    navigate(Urls.collections,{state:{
      unSolved:unSolved,
      location:location,
      collection:memmoCollection,
      name:name
    }})
  }
  let addCount=(solved,card)=>{
    if(!solved){
      setUnsolved(oldArray => [...oldArray, card.name]);

    }else if(location.hash.slice(1)==Urls.mistakes){
      props.deleteUnSolvedVerb(card);
    }
    if(count<cards.length-1){
      setCount(count=>count+=1);
    }else{ 
      setShouldShowToCollection(true);
    }
  }
  useEffect(()=>{
    if(endSession){
      if(!isExistingCollection & location.hash.slice(1)!=Urls.mistakes){
        setShoulsShowPopup(true);
      }else{
        navigate(Urls.collections,{state:{
          unSolved:unSolved,
          location:location,
        }})
      }
    }
  },[endSession])
  return(
    <>
    <div className={classes.collection}>
      {shouldShowCard && <Card onClick={addCount} card={cards[count]}/>}
      { shouldShowToCollectionButton && <Button onClick={()=>{setEndSession(true)}}>to collections</Button>}
    </div>
    { shouldShowPopup && <Popup><PopupInterior onClick={onClickPopup} /></Popup> }
    </>

  )
}
export default Collection;