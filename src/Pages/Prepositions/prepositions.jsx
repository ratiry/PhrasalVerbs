import { useLocation } from "react-router";
import Collections from "../Collections/Collections";
import Collection from "../Collection/collection";
import Picture404 from "../../common/Picture404/picture404";
import data from "./../../Helpers/Data";
const Prepositions = (props) => {
  let location = useLocation();
  const collectionsLength = props.useCollections(
    (state) => state.collections
  ).length;
  const picture404 = data.phrasalVerbs.picture404;
  if (location.hash == "") {
    return (
      <Collections type={props.type} useCollections={props.useCollections} />
    );
  } else {
    if (location.hash.slice(1) == "mistakes") {
      return (
        <Collection useCollections={props.useCollections} type={props.type} />
      );
    }
    if (
      (Number(location.hash.slice(1)) - 1 > collectionsLength) &
      (location.hash.slice(1) != "0")
    ) {
      return (
        <>
          <p>404</p>
          <Picture404 src={picture404} />
          <p>blabalbal</p>
        </>
      );
    }
    return (
      <Collection useCollections={props.useCollections} type={props.type} />
    );
  }
};
export default Prepositions;