import classes from "./Collections.module.scss";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import ImageOfCollection from "./ImageOfCollection/ImageOfCollection";
import { useState } from "react";
import AddNewCollection from "./AddNewCollection/AddNewCollection";
import { Urls } from "./../../App";
import Popup from "../../common/Popup/Popup";
import data from "../../Helpers/Data";
import Verbs from "../Verbs/Verbs";
import { collectionsStore, usePickedType } from "../../Helpers/store";
const Collections = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pickedType = usePickedType((state) => state.pickedType);
  
  const SetMakeNewCollection = props.useCollections(
    (state) => state.makeNewCollection
  );
  const SSetEditedCollection =  props.useCollections(
    (state) => state.editCollection
  );

  const collections =  props.useCollections(
    (state) => state.collections
  );
  const unSolved =  props.useCollections((state) => state.mistakes);
  const addUnSolved =  props.useCollections(
    (state) => state.addUnSolved
  );
  const deleteCollection =  props.useCollections(
    (state) => state.deleteCollection
  );
  let [shouldShowPopup, setShouldShowPopup] = useState(false);
  let [editedCollection, setEditedCollection] = useState([]);
  let [indexOfEditedCollection, setIndexOfEditedCollection] = useState(0);
  let startEditCollection = (collection, index) => {
    setShouldShowPopup(true);
    setEditedCollection(collection);

    setIndexOfEditedCollection(index);
  };
  let editCollection = (collection) => {
    SSetEditedCollection(collection, indexOfEditedCollection);
    setShouldShowPopup(false);
  };
  useEffect(() => {
    if (location.state != undefined) {
      addUnSolved(location.state.unSolved, pickedType);
      if (location.state.name != undefined) {
        SetMakeNewCollection(location.state.name, location.state.collection);
      }
    }
    navigate(location.pathname + location.hash, {});
  }, [pickedType]);
  let htmlImagesOfCollections = collections.map((c, index) => (
    <ImageOfCollection
      deleteCollection={deleteCollection}
      startEditCollection={startEditCollection}
      index={index}
      name={c.name}
      verbs={c.collection}
      type={props.type}
    />
  ));
  return (
    <>
      <div className={classes.collectionsWrapper}>
        <AddNewCollection
          onClick={() => {
            navigate(Urls[props.type] + "#" + "verbs", {});
          }}
        />
        {unSolved.length > 0 && (
          <ImageOfCollection
            name={Urls.mistakes.slice(1)}
            index={Urls.mistakes}
            verbs={unSolved}
            type={props.type}
          />
        )}
        <div className={classes.collections}>{htmlImagesOfCollections}</div>
      </div>
      {shouldShowPopup && (
        <Popup>
          <Verbs
            editCollection={editCollection}
            isInPopup={true}
            collection={editedCollection}
            phrasalVerbs={data[props.type].contents}
          />
        </Popup>
      )}
    </>
  );
};
export default Collections;
