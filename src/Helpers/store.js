import create from "zustand";
import composeUnSolvedVerbs from "./ComposeUnSolvedVerbs";
import  data  from "./Data";
import useLocalStorage from "./Hooks/useLocalStorage";

// export const useStore=create( set=>({
//   collection:[],
//   makeNewVerbsCollection:(name,collection)=>set(state=>{
//     let newCollection={name:name,collection:collection};
//     return {collection:[...state.collection,newCollection]}
//   }),
//   editVerbsCollection:(collection,index)=>set(state=>{
//     return {collection:[...state.collection.map((el,i)=>i==index ? ({...el, collection:[...collection]}) : el)]}
//   }),
//   setVerbsCollections:(collections)=>set(state=>{
//     return {collection:collections}
//   }),

//   deleteCollection:(index)=>set(state=>{
//     return {collection:[...state.collection.collections.filter((item,i)=>i!=index)]}
//   }),
//   unSolvedVerbs:[],
//   addUnSolvedVerbs:(verbs)=>set(state=>{
//     return {unSolvedVerbs:[...state.unSolvedVerbs.concat(composeUnSolvedVerbs( verbs,phrasalVerbs,state.unSolvedVerbs))]}
//   }),
//   deleteUnSolvedVerb:(verb)=>set(state=>{
//     return {unSolvedVerbs:[...state.unSolvedVerbs.filter(item => item.name !== verb.name)]}
//   }),
//   setUnSolvedVerbs:(verbs)=>set(state=>{
//     return {unSolvedVerbs:verbs}
//   }),



// }))
export const collectionsStore=[
  create( set=>({
    collections:[],
    mistakes:[],
    makeNewCollection:(name,collection)=>set(state=>{
      let newCollection={name:name,collection:collection};
      return {collections:[...state.collection,newCollection]}
    }),
    editCollection:(collection,index)=>set(state=>{
      return {collections:state.collection.map((el,i)=>i==index ? ({...el, collection:[...collection]}) : el)}
    }),
    deleteCollection:(index)=>set(state=>{
      return {collections:state.collections.filter((item,i)=>i!=index)}
    }),
    setCollections:(collections)=>set(state=>{
      return {collections:collections}
    }),
    deleteUnSolved:(mistake)=>set(state=>{
      return {mistakes:state.mistakes.filter(item => item.name !== mistake.name)}
    }),
    addUnSolved:(newMistakes,typeIndex)=>set(state=>{
      return{mistakes: state.mistakes.concat(composeUnSolvedVerbs( newMistakes,data[typeIndex].contents,...state.mistakes))}
    }),
  }))
].fill(data.length)
export const usePickedType=create(set=>({
  pickedType:0,
  setPickedType:(index)=>set(state=>{
    return {pickedType:index}
  }),
}))