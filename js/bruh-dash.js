var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, elem) {
    return arr.indexOf(elem);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, elem) {
    return arr.lastIndexOf(elem);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    // var falseyDef = [false, null, undefined, 0, NaN, '', ""];
    // for(var i = 0; i<arr.length; i++){
    //   for(var f = 0; f<falseyDef.length; f++){
    //     if(arr[i] === falseyDef[f]){
    //       arr.splice(i,1);
    //     }else if(Boolean(arr[i]) === false){
    //       arr.splice(i,1);
    //     }
    //   }
    // }
    return arr.filter(Boolean);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, index) {
    arr.pop();
    return arr.splice(index);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if(n === undefined){
      return arr.splice(1);
    }else{
      return arr.splice(n);
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if(n === undefined){
      arr.pop();
      return arr;
    }else{
      return arr.slice(0,arr.length-n);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if(n === undefined){
      return arr.slice(0,1);
    }else{
      return arr.slice(0,n);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(n === undefined){
      return arr.splice(arr.length-1);
    }else{
      return arr.splice(arr.length-n);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, ind1, ind2) {
    if(ind1 === undefined){
      ind1 = 0;
      ind2 = arr.length;
    }
    for(var i = ind1; i<ind2; i++){
      arr.splice(i,1,val);
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, ...vals) {

    if(Boolean(vals) === false){
      return arr;
    }else{
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < vals.length; j++){
          var ind = arr.indexOf(vals[j]);
          arr.splice(ind,1);
        }
      }
      return arr;
    }
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, inds) {

    if(Boolean(inds) === false){
      return arr;
    }else{
      var filler = 0;
      for(var i = 0; i < inds.length; i++){
        var take = inds[i]+filler;
        arr.splice(take,1);
        filler--;
      }
      return arr;
    }
  },

  // creates an array excluding all the specified values
  without: function(arr, ...vals) {

    if(Boolean(vals) === false){
      return arr;
    }else{
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < vals.length; j++){
          for(var k = 0; k < vals[j].length; k++){
            if(arr[i] === vals[j][k]){
              arr.splice(i,1);
            }
          }
        }
      }
      return arr;
    }
  },

  // returns an array with specified values excluded
  difference: function(arr, vals) {

    if(Boolean(vals) === false){
      return arr;
    }else{
      for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < vals.length; j++){
          if(arr[i] === vals[j]){
            arr.splice(i,1);
          }
        }
      }
      return arr;
    }
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
