import logo from './logo.svg';
import classes from './App.module.scss';
import { useEffect, useState } from 'react';
import { Route, Routes ,BrowserRouter, useLocation, useNavigate} from 'react-router-dom';
import Verbs from './Pages/Verbs/Verbs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import  data  from './Helpers/Data';
import Collection from './Pages/Collection/collection';
import Collections from './Pages/Collections/Collections';
import composeUnSolvedVerbs from './Helpers/ComposeUnSolvedVerbs';
import checkForDoubleCollection from './Helpers/CheckForDoubleCollection';
import useLocalStorage from './Helpers/Hooks/useLocalStorage';
import {upDatingLocalState,upDatingMistakes} from './Helpers/UpdatingLocalState';
import Container from './common/Container/Container';
import { useStore } from './Helpers/store';
import PickType from './Pages/PickType/PickType';
export const Urls={
  collection:"/Collection",
  collections:"/",
  verbs:"/Verbs",
  mistakes:"mistakes",
  pickType:"/pickType"
}
function App() {
  let [collectionsVerbs,setCollectionsVerbs]=useLocalStorage("VerbsColll",[])
  let [unSolvedVerbs,setUnSolvedVerbs]=useLocalStorage("unSSolvedVerbs",[]);
  let addUnSolvedVerbs=(Verbs)=>{
    let a=unSolvedVerbs.concat(composeUnSolvedVerbs( Verbs,data[0].contents,unSolvedVerbs));
    setUnSolvedVerbs(a);
  }
  let deleteUnSolvedVerb=(Verb)=>{
    setUnSolvedVerbs(unSolvedVerbs =>unSolvedVerbs.filter(item => item.name !== Verb.name))
  }
  let makeNewCollectionVerb=(name,collection)=>{
    setCollectionsVerbs(collectionsVerbs=>[...collectionsVerbs,{name:name,collection:collection}])
  }
  let editCollection=(collection,index)=>{
    setCollectionsVerbs(collectionsVerbs=>[...collectionsVerbs].map((el,i)=>i==index ? ({...el, collection:[...collection]}) : el))
  
  }
  let deleteCollection=(index)=>{
    setCollectionsVerbs(collections=>collections.filter((item,i)=>i!=index))
  }
  useEffect(()=>{
    setCollectionsVerbs( upDatingLocalState(collectionsVerbs,data[0].contents) )
    setUnSolvedVerbs(upDatingMistakes(unSolvedVerbs,data[0].contents))
  },[data])
  

  return (

      <div className={classes.App}>
        <Header/>
          <Container>
            <Routes>

              <Route  path={Urls.verbs}  element={<Verbs collection={[]} phrasalVerbs={data[0].contents} isInPopup={false}/>}></Route>
              <Route path={Urls.collection} element={<Collection collectionsVerbs={collectionsVerbs} deleteUnSolvedVerb={deleteUnSolvedVerb} unSolvedVerbs={unSolvedVerbs} phrasalVerbs={data[0].contents}  />}/>
              <Route path={Urls.collections}  element={<Collections deleteCollection={deleteCollection} editCollection={editCollection} unSolvedVerbs={unSolvedVerbs} makeNewCollectionVerb={makeNewCollectionVerb} addUnSolvedVerbs={addUnSolvedVerbs}  collectionsVerbs={collectionsVerbs}/>}></Route> 
              <Route path={Urls.pickType} element={<PickType/>}></Route>
            </Routes>
          </Container>
        <Footer/>
      </div>

  );
}

export default App;
