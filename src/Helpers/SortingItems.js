const uniqueArray = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const items = [[array[i][0][0]], []];
    const namesArray = [];
    for (let j = 0; j < array[i][1].length; j++) {
      if (!namesArray.includes(array[i][1][j].name)) {
        namesArray.push(array[i][1][j].name);
        items[1].push(array[i][1][j]);
      }
    }
    newArray.push(items);
  }
  return newArray;
};
const sortingCollections = (data, type) => {
  const collections = [];
  const types = {};
  switch (type) {
    case "prepositions":
      for (let i = 0; i < data.length; i++) {
        if (Object.keys(types).indexOf(data[i].type) > -1) {
          types[data[i].type].push(data[i]);
        } else {
          types[data[i].type] = [data[i]];
        }
      }
      break;
    case "phrasalVerbs":
      for (let i = 0; i < data.length; i++) {
        if (Object.keys(types).indexOf(data[i].name.split(" ")[0]) > -1) {
          types[data[i].name.split(" ")[0]].push(data[i]);
        } else {
          types[data[i].name.split(" ")[0]] = [data[i]];
        }
      }
      break;
    case "idioms":
      for (let i = 0; i < data.length; i++) {
        if (Object.keys(types).indexOf(data[i].name.split(" ")[0]) > -1) {
          types[data[i].name.split(" ")[0]].push(data[i]);
        } else {
          types[data[i].name.split(" ")[0]] = [data[i]];
        }
      }
      break;
  }
  for (let i = 0; i < Object.keys(types).length; i++) {
    const items = [[Object.keys(types)[i]], []];
    for (let j = 0; j < types[Object.keys(types)[i]].length; j++) {
      items[1].push(types[Object.keys(types)[i]][j]);
    }
    collections.push(items);
  }
  return uniqueArray(collections);
};
export default sortingCollections;
