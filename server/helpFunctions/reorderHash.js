let createHashOfResults = (results) => {
    var hash = {};
  
    for( var i = 0 ; i < results.length ; i++ ){
        var item = results[i];
        var id = item._id;
        hash[ id ] = item;
    }
  
    return hash;
  }

  module.exports = {createHashOfResults};

