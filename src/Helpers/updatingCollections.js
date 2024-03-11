

const updatingCollections=(collections,data)=>{
   const newCollections =[];
   for(let i=0;i<collections.length;i++){
        const collection={name:collections[i].name,collection:[],date:collections[i].date,timeStage:collections[i].timeStage,wasExcercised:collections[i].wasExcercised};
        for(let j=0;j<collections[i].collection.length;j++){
            for(let k=0;k<data.length;k++){
                if(data[k].name==collections[i].collection[j].name){
                    collection.collection.push(collections[i].collection[j]);
                }
            }
        }
        newCollections.push(collection);
   }
   return newCollections;
 
}
export default updatingCollections;