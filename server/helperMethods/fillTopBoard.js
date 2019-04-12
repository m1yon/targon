let fillTopBoard = ( (docs, id) =>{
    let returnedValue = {
        'topBoards': {
        }
    };
    for(let x = 0; x < docs.length; x++){
        let title = docs[x]._id;
        if (id == 'players'){
            returnedValue.topBoards[title] = docs[x].players;
        }else if (id == 'teams'){
            returnedValue.topBoards[title] = docs[x].teams;
        }
    }
  return returnedValue;
});

module.exports = {fillTopBoard};