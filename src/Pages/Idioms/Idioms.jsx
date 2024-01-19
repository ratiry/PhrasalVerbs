import Collection from "../Collection/collection";
import Collections from "../Collections/Collections";
import { useLocation } from 'react-router-dom';
import isInteger from './../../Helpers/isIntegrar';
import Picture404 from './../../common/Picture404/picture404';
import data from "./../../Helpers/Data";
const Idioms = (props) => {
  let location=useLocation();
  const collectionsLength=props.useCollections(state=>state.collections).length;
  const picture404 = data.idioms.picture404;
  if(location.hash=="" ){
    return <Collections type={props.type} useCollections={props.useCollections} />;

  }else{
    if( Number(location.hash.slice(1))-1>collectionsLength){
      return (
        <>
          <p>404</p>
          <Picture404 src={picture404} />
          <p>may you be not in a pickle , but be as cool as cucumber</p>
        </>
      );
    }
    return <Collection useCollections={props.useCollections} type={props.type}/>
  }
};
export default Idioms;

