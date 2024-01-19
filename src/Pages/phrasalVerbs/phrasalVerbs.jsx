import { useLocation } from "react-router";
import Collections from "../Collections/Collections"
import Collection from "../Collection/collection";
const PhrasalVerbs=(props)=>{
  let location=useLocation();
  if(location.hash==""){
    return (
      <Collections type={props.type} useCollections={props.useCollections} />
    ); 
  }else{
    return (
      <Collection type={props.type} useCollections={props.useCollections} />
    ); 
  }
}
export default PhrasalVerbs;