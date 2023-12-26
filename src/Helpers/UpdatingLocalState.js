
export let upDatingLocalState=(collections,phrasalVerbs)=>{
    for(let i=0;i<collections.length;i++){
        for(let j=0;j<collections[i].collection.length;j++){
            for(let x=0;x<phrasalVerbs.length;x++){
                if(collections[i].collection[j].name==phrasalVerbs[x].name){
                    collections[i].collection[j]=phrasalVerbs[x];
                }
            }
        }
    }
    return collections;
}
export let upDatingMistakes=(collection,phrasalVerbs)=>{
    for(let j=0;j<collection.length;j++){
        for(let x=0;x<phrasalVerbs.length;x++){
            if(collection[j].name==phrasalVerbs[x].name){
                collection[j]=phrasalVerbs[x];
            }
        }
    }
    return collection; 
}

