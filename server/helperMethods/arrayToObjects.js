let arrayToObjects = ( (docs) =>{
    let returnedValue = {};
    for (let i = 0; i < docs.length; i++){
        returnedValue[docs[i]._id] = docs[i];
        delete returnedValue[docs[i]._id]._id; // deletes the _id key to reduce redundency 
      }
      return returnedValue;
})

module.exports = {arrayToObjects};