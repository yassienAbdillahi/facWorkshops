// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}


//challenge2
function searchParamsToObject(formEncodedString) {
  const array1 = formEncodedString.split("&");
  console.log(array1);
  
  let finalObject = {};
  
  
  const array2 = array1.map(findPostionOfEqualsSign);
  function findPostionOfEqualsSign(value) {
    return value.indexOf("=");
  }
  console.log(array2);


  
  for (let i = 0; i < array1.length; i++) {
    const array3 = array1[i].split("=");
    console.log(array3);
    finalObject[array3[0]] = array3[1];
    console.log(finalObject);
  }
  
  console.log(finalObject);
  return finalObject;

}

searchParamsToObject("name=oliver&email=hello@oliverjam.es");

//challenge3
function isNumber(a) {
  if(
    typeof a === "number"
  ) {return true;}
  else {return false;}
}

function isNotNegaitive(a) {
  if (a < 0) {return false;}
  else {return true;}
}

function divisibleByFour(a) {
  if (a % 4 === 0) {return true;}
  else {return false;}
}

function divisibleByOneHundred(a) {
  if (a % 100 === 0) {return true;}
  else {return false;}
}

function divisibleByFourHundred(a) {
  if (a % 400 === 0) {return true;}
  else {return false;}
}

function isLeapYear(year) {
  //if the 'year' is not a number, it is not a leap year
  //if the 'year' is negative, it is not a leap year
  //if the year is not divisible by four, it is not a leap year
  //if the year is div by 100 but not by 400, it is not a leap year
  //otherwise, it is a leap year
  if (
    (
      isNumber(year) === false
    ) || 
    (
      isNotNegaitive(year) === false
    ) || 
    (
      divisibleByFour(year) === false
    ) || 
    (
      (divisibleByOneHundred === true) && (divisibleByFourHundred === false)
    )
  ) {return false;}
  else {return true;}

}

