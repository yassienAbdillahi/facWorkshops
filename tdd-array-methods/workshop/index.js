//workshop

/*original map function
function map(array) {
  return array;
}
*/

//first refactor
/*
function map(array, someFunction) {
  let newArrayFollowingMap = [];
  let newArrayElementOne = someFunction(array[0]);
  newArrayFollowingMap.push(newArrayElementOne);
  return newArrayFollowingMap;
}
*/

//second refactor
/*
function map(array, someFunction) {
  let newArrayFollowingMap = [];

  for (let i = 0; i < array.length; i++) {
    let newArrayElement = someFunction(array[i]);
  newArrayFollowingMap.push(newArrayElement);
  }

  return newArrayFollowingMap;
}
*/

//third refactor to deal with empty elements within the array
/*
function map(array, someFunction) {
  let newArrayFollowingMap = [];

  for (let i = 0; i < array.length; i++) {

    if(array[i] == undefined) {newArrayFollowingMap.push(undefined);}
    else {
      let newArrayElement = someFunction(array[i]);
      newArrayFollowingMap.push(newArrayElement);
    }
  
  }

  return newArrayFollowingMap;
}
*/

//fourth refactor to enable passing in the current element's index into the function

function map(array, someFunction) {
  let newArrayFollowingMap = [];

  for (let i = 0; i < array.length; i++) {

    if(array[i] == undefined) {newArrayFollowingMap.push(undefined);}
    else {
      let newArrayElement = someFunction(array[i], i);
      newArrayFollowingMap.push(newArrayElement);
    }
  
  }

  return newArrayFollowingMap;
}





//workshop part2 filter function

/* 
function filter(array, someFunction) {
  let newArrayFollowingFilter = [];

  for(let i = 0; i < array.length; i++){

    if (someFunction(array[i]) == true)
    {newArrayFollowingFilter.push(array[i]);}

  }

  return newArrayFollowingFilter;

}
*/

//first refactor to enable passing in the current element's index into the function
function filter(array, someFunction) {
  let newArrayFollowingFilter = [];

  for(let i = 0; i < array.length; i++){

    if (someFunction(array[i], i) == true)
    {newArrayFollowingFilter.push(array[i]);}

  }

  return newArrayFollowingFilter;

}

//workshop part3 every function
/*
function every(array, someFunct) {
  let finalTrueOrFalse;
  let finalTrueOrFalseArray = [];
  
  for(let i = 0; i < array.length; i++) {

    if (someFunct(array[i]) == true) {finalTrueOrFalseArray.push(true)}
    
  }

  if (finalTrueOrFalseArray.length == array.length) {finalTrueOrFalse = true;}
  else {finalTrueOrFalse = false;}

  return finalTrueOrFalse;
}
*/

//first refactor to enable passing in the current element's index into the function
function every(array, someFunct) {
  let finalTrueOrFalse;
  let finalTrueOrFalseArray = [];
  
  for(let i = 0; i < array.length; i++) {

    if (someFunct(array[i], i) == true) {finalTrueOrFalseArray.push(true)}
    
  }

  if (finalTrueOrFalseArray.length == array.length) {finalTrueOrFalse = true;}
  else {finalTrueOrFalse = false;}

  return finalTrueOrFalse;
}

//workshop part4 some function
/*
function some(array, aFunct) {
  let finalTrueOrFalse;
  let finalTrueOrFalseArray = [];

  for (
    let i = 0; (i < array.length) && (finalTrueOrFalseArray.length == 0); i++
  ) {
    if (aFunct(array[i]) == true) {finalTrueOrFalseArray.push(true);}
  }

  if(finalTrueOrFalseArray.length != 0) {finalTrueOrFalse = true;}
  else{finalTrueOrFalse = false;}

  return finalTrueOrFalse;
  
}
*/

//first refactor to enable passing in the current element's index into the function
function some(array, aFunct) {
  let finalTrueOrFalse;
  let finalTrueOrFalseArray = [];

  for (
    let i = 0; (i < array.length) && (finalTrueOrFalseArray.length == 0); i++
  ) {
    if (aFunct(array[i], i) == true) {finalTrueOrFalseArray.push(true);}
  }

  if(finalTrueOrFalseArray.length != 0) {finalTrueOrFalse = true;}
  else{finalTrueOrFalse = false;}

  return finalTrueOrFalse;
  
}


//workshop part5 find function
/*
function find(array, aFunct) {
  let searchedForElementsValue;

  for (
    let i = 0; (i < array.length) && (searchedForElementsValue == undefined); i++
  ) {
    if(aFunct(array[i]) == true) {searchedForElementsValue = array[i];}
  }

  if(searchedForElementsValue == undefined){return undefined;}
  else{return searchedForElementsValue;}
}
*/

//first refactor to enable passing in the current element's index into the function
function find(array, aFunct) {
  let searchedForElementsValue;

  for (
    let i = 0; (i < array.length) && (searchedForElementsValue == undefined); i++
  ) {
    if(aFunct(array[i], i) == true) {searchedForElementsValue = array[i];}
  }

  if(searchedForElementsValue == undefined){return undefined;}
  else{return searchedForElementsValue;}
}


//workshop part6 reduce function

//this one is very confusing but it at least works
/*
function reduce(array, aFunct, total) {
  let finalValueToBeReturned = total;
  
  for (let i = 0; i < array.length; i++) {
    finalValueToBeReturned += aFunct(total, array[i]);
  }
  return finalValueToBeReturned;
  
}
*/

//this one does not even work
//first refactor to deal with case where no initial total is passed as an argument
function reduce(array, aFunct, total) {
  let finalValueToBeReturned = total;

  let i = 0;

  if (total == undefined) {
    finalValueToBeReturned = array[0];
    i = 1;
  }
  
  for (; i < array.length; i++) {
    finalValueToBeReturned += aFunct(total, array[i]);
  }
  return finalValueToBeReturned;
  
}