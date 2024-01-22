const makingCards = (collection) => {
  const cards = [];
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].description.length; j++) {
      const card=[];
      card.description=collection[i].description[j];
      debugger;
      for(let u=0;u<Object.values(collection[i]).length;u++){
        if (Object.keys(collection[i])[u]!=="description") {
            card[Object.keys(collection[i])[u]] = Object.values(collection[i])[u];
        }
      }
      cards.push(card)
    }
     
  }
  return cards
}
export default makingCards;
