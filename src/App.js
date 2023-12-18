import logo from './logo.svg';
import classes from './App.module.scss';
import { useEffect, useState } from 'react';
import { Route, Routes ,BrowserRouter, useLocation, useNavigate} from 'react-router-dom';
import Verbs from './Pages/Verbs/Verbs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { phrasalVerbs } from './Helpers/Data';
import Collection from './Pages/Collection/collection';
import Collections from './Pages/Collections/Collections';
import composeUnSolvedVerbs from './Helpers/ComposeUnSolvedVerbs';
import checkForDoubleCollection from './Helpers/CheckForDoubleCollection';
import useLocalStorage from './Helpers/Hooks/useLocalStorage';
import {upDatingLocalState,upDatingMistakes} from './Helpers/UpdatingLocalState';
import Container from './common/Container/Container';
export const Urls={
  collection:"/Collection",
  collections:"/",
  verbs:"/Verbs",
  mistakes:"mistakes"
}
function App() {
  let [collectionsVerbs,setCollectionsVerbs]=useLocalStorage("VerbsColll",[])
  let [unSolvedVerbs,setUnSolvedVerbs]=useLocalStorage("unSSolvedVerbs",[]);
  window.unSolvedVerbs=unSolvedVerbs;
  let location=useLocation();
  let navigate=useNavigate();
  let addUnSolvedVerbs=(Verbs)=>{
    let a=unSolvedVerbs.concat(composeUnSolvedVerbs( Verbs,phrasalVerbs,unSolvedVerbs));
    setUnSolvedVerbs(a);
  }
  let deleteUnSolvedVerb=(Verb)=>{
    setUnSolvedVerbs(unSolvedVerbs =>unSolvedVerbs.filter(item => item.name !== Verb.name))
  }
  let makeNewCollectionVerb=(name,collection)=>{
    setCollectionsVerbs(collectionsVerbs=>[...collectionsVerbs,{name:name,collection:collection}])
  }
  useEffect(()=>{
    setCollectionsVerbs( upDatingLocalState(collectionsVerbs,phrasalVerbs) )
    setUnSolvedVerbs(upDatingMistakes(unSolvedVerbs,phrasalVerbs))
  },[phrasalVerbs])
  

  return (

      <div className={classes.App}>
        <Header/>
          <Container>
            <Routes>
              <Route  path={Urls.verbs}  element={<Verbs phrasalVerbs={phrasalVerbs} />}></Route>
              <Route path={Urls.collection} element={<Collection collectionsVerbs={collectionsVerbs} deleteUnSolvedVerb={deleteUnSolvedVerb} unSolvedVerbs={unSolvedVerbs} phrasalVerbs={phrasalVerbs}  />}/>
              <Route path={Urls.collections}  element={<Collections unSolvedVerbs={unSolvedVerbs} makeNewCollectionVerb={makeNewCollectionVerb} addUnSolvedVerbs={addUnSolvedVerbs}  collectionsVerbs={collectionsVerbs}/>}></Route> 
            </Routes>
          </Container>
        <Footer/>
      </div>

  );
}

export default App;
