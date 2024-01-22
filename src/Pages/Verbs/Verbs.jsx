import { useState } from "react";
import classes from "./Verbs.module.scss";
import { useNavigate } from "react-router-dom";
import Verb from "./verb/verb";
import VerbsContainer from "./VerbsContainer/VerbsContainer";
import Button from "../../common/Button/Button";
import findVerbInCollection from "../../Helpers/findVerbInCollection";
import { useLocation } from "react-router-dom";
import { Urls } from "./../../App";
import { usePickedType } from "../../Helpers/store";
import data from "../../Helpers/Data";
const Verbs = (props) => {
  const location = useLocation();
  const [collection, changeCollection] = useState(props.collection);
  let verbs = [];

  if (props.isInPopup == true) {
    verbs=props.phrasalVerbs;
  } else{
    verbs = data[location.hash.slice(1)].contents;
  }
  let navigate = useNavigate();
  let Submit = (collection) => {
    if ((collection.length > 0) & (props.isInPopup == false)) {
      navigate(Urls[location.hash.slice(1)] + "#" + "-1", {
        state: { collection: collection, location: location },
      });
    } else if (collection.length > 0) {
      props.editCollection(collection);
    }
  };
  let onVerbClick = (verb, selected) => {
    if (!selected) {
      changeCollection((prevArray) => [...prevArray, verb]);
    } else {
      changeCollection((collection) =>
        collection.filter((item) => item.name != verb.name)
      );
    }
  };
  let verbsHtml = verbs.map((verb) => {
    return (
      <Verb
        onClick={onVerbClick}
        selected={findVerbInCollection(collection, verb)}
        verb={verb}
      >
        {verb.name}
      </Verb>
    );
  });
  return (
    <div className={classes.verbs}>
      <div>
        <Button
          onClick={() => {
            Submit(collection);
          }}
        >
          Submit
        </Button>
      </div>
      <VerbsContainer>{verbsHtml}</VerbsContainer>
    </div>
  );
};
export default Verbs;
