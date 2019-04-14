let arrayToObjects = ( (docs) =>{
    let returnedValue = {};
    for (let i = 0; i < docs.length; i++) {
        returnedValue[docs[i]._id] = docs[i];      
    }
    return returnedValue;
})

module.exports = {arrayToObjects};