import {useEffect} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import classes from "./App.module.scss";
import Verbs from "./Pages/Verbs/Verbs";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {upDatingLocalState, upDatingMistakes} from "./Helpers/UpdatingLocalState";
import Container from "./common/Container/Container";
import {
  usePhrasalVerbsCollections,
  usePickedCollection,
  usePickedType,
  usePrepositionsCollections,
} from "./Helpers/store";
import PickType from "./Pages/PickType/PickType";
import {useIdiomsCollections} from "./Helpers/store";
import Page from "./Pages/Page";
export const Urls = {
  verbs: "/Verbs",
  pickType: "/",
  idioms: "/idioms",
  phrasalVerbs: "/phrasalVerbs",
  prepositions: "/prepositions",
  mistakes: "/mistakes",
};
function App() {
  const setPickedType = usePickedType((state) => state.setPickedType);
  const setPickedCollection = usePickedCollection((state) => state.setPickedCollection);
  const location = useLocation();

  useEffect(() => {
    if (location.hash != "") {
      setPickedCollection(Number(location.hash.slice(1)));
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
              <Page type={Urls.idioms.slice(1)} useCollections={useIdiomsCollections} />
            }
          ></Route>
          <Route
            path={Urls.phrasalVerbs}
            element={
              <Page
                type={Urls.phrasalVerbs.slice(1)}
                useCollections={usePhrasalVerbsCollections}
              />
            }
          ></Route>
          <Route
            path={Urls.prepositions}
            element={
              <Page
                useCollections={usePrepositionsCollections}
                type={Urls.prepositions.slice(1)}
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
