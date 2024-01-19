import Collection from "../Collection/collection";
import Collections from "../Collections/Collections";
import { useLocation } from 'react-router-dom';

const Idioms = (props) => {
  let location=useLocation();
  debugger;
  if(location.hash==""){
    return <Collections type={props.type} useCollections={props.useCollections} />;
  }else{
    return <Collection useCollections={props.useCollections} type={props.type}/>
  }
};
export default Idioms;

