import {useLocation} from "react-router";
import Collections from "../Pages/Collections/Collections";
import Collection from "../Pages/Collection/collection";
import Picture404 from "../common/Picture404/picture404";
import data from "../Helpers/Data";
import Verbs from "./Verbs/Verbs";
const Page = (props) => {
  let location = useLocation();
  const collectionsLength = props.useCollections((state) => state.collections).length;
  const picture404 = data.phrasalVerbs.picture404;
  if (location.hash.slice(1) == "verbs") {
    return <Verbs type={props.type} collection={[]} isInPopup={false} />;
  }
  if (location.hash == "") {
    return <Collections type={props.type} useCollections={props.useCollections} />;
  }
  if (
    location.hash.slice(1) == "mistakes" ||
    (Number(location.hash.slice(1)) - 1 < collectionsLength)) {
    return <Collection useCollections={props.useCollections} type={props.type} />;
  }
  return (
    <>
      <p>404</p>
      <Picture404 src={picture404} />
    </>
  );
};

export default Page;
