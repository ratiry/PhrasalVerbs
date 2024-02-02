const sortingCollections = (data, type) => {
  const collections = {};
  switch (type) {
    // case "prepositions":
    //   const types = [];
    //   for (let i = 0; i < data[type].length; i++) {
    //     if (types.includes(data[type][i].type) != true) {
    //       collections[data[type][i].type] = [data[type][i]];
    //     }else{
    //       collections[data[type][i].type].push(data[type][i]);
    //     }
    //   }
    case "phrasalVerbs":
      const verbs = [];
      for (let i = 0; i < data[type].length; i++) {
        const verb = data[type][i].name.split(" ")[0];
        if (verbs.includes(verb) !== true) {
          collections[verb] = [data[type][i]];
        } else {
          collections[verb].push(data[type][i]);
        }
      }
    case "idioms":
  }
  return collections;
};
export default sortingCollections;
