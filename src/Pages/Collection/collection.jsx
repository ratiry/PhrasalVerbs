import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import makingCards from "./../../Helpers/MkingCards";
import Card from "./Card/Card";
import classes from "./collection.module.scss";
import shuffle from "./../../Helpers/shuffle";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import Popup from "../../common/Popup/Popup";
import PopupInterior from "./PopupInterior/PopupInterior";
import { Urls } from "./../../App";
import {
  usePickedCollection,
} from "./../../Helpers/store";

let Collection = (props) => {
  let location = useLocation();
  let [shouldShowCard, setShouldShowCard] = useState(false);
  let [memmoCollection, setMemmooCollection] = useState([]);
  let [cards, setCards] = useState([]);

  const pickedCollection = usePickedCollection(
    (state) => state.pickedCollection
  );
  const collections = props.useCollections(
    (state) => state.collections
  );
  const mistakes = props.useCollections((state) => state.mistakes);
  const deleteUnSolved = props.useCollections(
    (state) => state.deleteUnSolved
  );
  useEffect(() => {
    if (location.state == undefined ) {
      if (location.hash.slice(1) != "mistakes" & pickedCollection!=-1) {
        setCards(
          shuffle(makingCards(collections[pickedCollection].collection))

        );
        setMemmooCollection(collections[pickedCollection].collection);
      } else {
        setCards(shuffle(mistakes));
        setMemmooCollection(mistakes);
      }
    } else {
      setCards(shuffle(makingCards(location.state.collection)));
      setMemmooCollection(location.state.collection);
    }
  }, [pickedCollection]);
  useEffect(() => {
    if (cards.length > 0) {
      setShouldShowCard(true);
    }
  }, [cards]);
  let [count, setCount] = useState(0);
  let [endSession, setEndSession] = useState(false);
  let [unSolved, setUnsolved] = useState([]);
  let [shouldShowPopup, setShoulsShowPopup] = useState(false);
  let navigate = useNavigate();
  let [shouldShowToCollectionButton, setShouldShowToCollection] =
    useState(false);
  let onClickPopup = (name) => {
    navigate("/"+props.type , {
      state: {
        unSolved: unSolved,
        location: location,
        collection: memmoCollection,
        name: name,
      },
    });
  };
  let addCount = (solved, card) => {
    let transformedCard={};
    for(let i=0;i<Object.keys(card).length;i++){
      transformedCard[Object.keys(card)[i]]=Object.values(card)[i]
    }
    if (!solved) {
      setUnsolved((oldArray) => [...oldArray, transformedCard]);
    } else {
      deleteUnSolved(card);
    }
    if (count < cards.length - 1) {
      setCount((count) => (count += 1));
    } else {
      setShouldShowToCollection(true);
    }
  };
  useEffect(() => {
    if (endSession) {
      if (location.state != null) {
        setShoulsShowPopup(true);
      } else {
        navigate("/"+props.type , {
          state: {
            unSolved: unSolved,
            location: location,
          },
        });
      }
    }
  }, [endSession]);
  return (
    <>
      <div className={classes.collection}>
        {shouldShowCard && <Card type={props.type} onClick={addCount} card={cards[count]} />}
        {shouldShowToCollectionButton && (
          <Button
            onClick={() => {
              setEndSession(true);
            }}
          >
            to collections
          </Button>
        )}
      </div>
      {shouldShowPopup && (
        <Popup>
          <PopupInterior onClick={onClickPopup} />
        </Popup>
      )}
    </>
  );
};
export default Collection;
