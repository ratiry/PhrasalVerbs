import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import classes from "./App.module.scss";
import Verbs from "./Pages/Verbs/Verbs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import data from "./Helpers/Data";
import Collection from "./Pages/Collection/collection";
import Collections from "./Pages/Collections/Collections";
import useLocalStorage from "./Helpers/Hooks/useLocalStorage";
import {
  upDatingLocalState,
  upDatingMistakes,
} from "./Helpers/UpdatingLocalState";
import Container from "./common/Container/Container";
import {
  usePhrasalVerbsCollections,
  usePickedCollection,
  usePickedType,
  useStore,
} from "./Helpers/store";
import PickType from "./Pages/PickType/PickType";
import breakDownHash from "./Helpers/BreakDownHash";
import Idioms from "./Pages/Idioms/Idioms";
import { useIdiomsCollections } from "./Helpers/store";
import PhrasalVerbs from "./Pages/phrasalVerbs/phrasalVerbs";
export const Urls = {
  collection: "/Collection",
  collections: "/Collections",
  verbs: "/Verbs",
  mistakes: "/Mistakes",
  pickType: "/",
  idioms: "/idioms",
  phrasalVerbs: "/phrasalVerbs",
};
function App() {
  const setPickedType = usePickedType((state) => state.setPickedType);
  const setPickedCollection = usePickedCollection(
    (state) => state.setPickedCollection
  );
  let location = useLocation();

  useEffect(() => {
    if (location.hash != "") {
      setPickedCollection(Number(location.hash.slice(1)))
    }
  }, [location.hash]);

  return (
    <div className={classes.App}>
      <Header />
      <Container>
        <Routes>
          <Route
            path={Urls.verbs}
            element={<Verbs collection={[]} isInPopup={false} />}
          ></Route>
          <Route path={Urls.pickType} element={<PickType />}></Route>
          <Route
            path={Urls.idioms}
            element={
              <Idioms
                type={Urls.idioms.slice(1)}
                useCollections={useIdiomsCollections}
              />
            }
          ></Route>
          <Route
            path={Urls.phrasalVerbs}
            element={
              <PhrasalVerbs
                type={Urls.phrasalVerbs.slice(1)}
                useCollections={usePhrasalVerbsCollections}
              />
            }
          ></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
