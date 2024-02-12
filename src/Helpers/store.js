import create from "zustand";
import composeUnSolvedVerbs from "./ComposeUnSolvedVerbs";
import data from "./Data";
import useLocalStorage from "./Hooks/useLocalStorage";
import { persist, createJSONStorage } from "zustand/middleware";
import sortingCollections from "./SortingItems";

 export const useIdiomsCollections=create(
      persist(
        (set) => ({
          collections: [],
          mistakes: [],
          makeNewCollection: (name, collection) =>
            set((state) => {
              let newCollection = { name: name, collection: collection };
              return { collections: [...state.collections, newCollection] };
            }),
          editCollection: (collection, index) =>
            set((state) => {
              return {
                collections: state.collections.map((el, i) =>
                  i == index ? { ...el, collection: [...collection] } : el,
                ),
              };
            }),
          deleteCollection: (index) =>
            set((state) => {
              return {
                collections: state.collections.filter((item, i) => i != index),
              };
            }),
          setCollections: (collections) =>
            set((state) => {
              return { collections: collections };
            }),
          deleteUnSolved: (mistake) =>
            set((state) => {
              return {
                mistakes: state.mistakes.filter(
                  (item) => item.name !== mistake.name,
                ),
              };
            }),
          addUnSolved: (newMistakes, typeIndex) =>
            set((state) => {
              return {
                mistakes: state.mistakes.concat(
                  composeUnSolvedVerbs(
                    newMistakes,
                    state.mistakes,
                  ),
                ),
              };
            }),
        }),
        {
          name: "idioms",
          storage: createJSONStorage(() => localStorage),
        },
      ),
    )

   export const usePhrasalVerbsCollections = create(
     persist(
       (set) => ({
         collections: [],
         mistakes: [],
         makeNewCollection: (name, collection) =>
           set((state) => {
             let newCollection = { name: name, collection: collection };
             return { collections: [...state.collections, newCollection] };
           }),
         editCollection: (collection, index) =>
           set((state) => {
             return {
               collections: state.collections.map((el, i) =>
                 i == index ? { ...el, collection: [...collection] } : el
               ),
             };
           }),
         deleteCollection: (index) =>
           set((state) => {
             return {
               collections: state.collections.filter((item, i) => i != index),
             };
           }),
         setCollections: (collections) =>
           set((state) => {
             return { collections: collections };
           }),
         deleteUnSolved: (mistake) =>
           set((state) => {
             return {
               mistakes: state.mistakes.filter(
                 (item) => item.name !== mistake.name
               ),
             };
           }),
         addUnSolved: (newMistakes, typeIndex) =>
           set((state) => {
             return {
               mistakes: state.mistakes.concat(
                 composeUnSolvedVerbs(
                   newMistakes,
                   state.mistakes
                 )
               ),
             };
           }),
       }),
       {
         name: "phrasalVerbs",
         storage: createJSONStorage(() => localStorage),
       }
     )
   ); 

      export const usePrepositionsCollections = create(
        persist(
          (set) => ({
            collections: [],
            mistakes: [],
            makeNewCollection: (name, collection) =>
              set((state) => {
                let newCollection = { name: name, collection: collection };
                return { collections: [...state.collections, newCollection] };
              }),
            editCollection: (collection, index) =>
              set((state) => {
                return {
                  collections: state.collections.map((el, i) =>
                    i == index ? { ...el, collection: [...collection] } : el
                  ),
                };
              }),
            deleteCollection: (index) =>
              set((state) => {
                return {
                  collections: state.collections.filter(
                    (item, i) => i != index
                  ),
                };
              }),
            setCollections: (collections) =>
              set((state) => {
                return { collections: collections };
              }),
            deleteUnSolved: (mistake) =>
              set((state) => {
                return {
                  mistakes: state.mistakes.filter(
                    (item) => item.name !== mistake.name
                  ),
                };
              }),
            addUnSolved: (newMistakes, typeIndex) =>
            
              set((state) => {
                debugger;
                return {
                  mistakes: state.mistakes.concat(
                    composeUnSolvedVerbs(
                      newMistakes,
                      state.mistakes
                    )
                  ),
                };
              }),
          }),
          {
            name: "prepositions",
            storage: createJSONStorage(() => localStorage),
          }
        )
      ); 
export const usePickedType = create((set) => ({
  pickedType: 0,
  setPickedType: (index) =>
    set((state) => {
      return { pickedType: index };
    }),
}));
export const usePickedCollection = create((set) => ({
  pickedCollection: 0,
  setPickedCollection: (index) =>
    set((state) => {
      return { pickedCollection: index };
    }),
}));
