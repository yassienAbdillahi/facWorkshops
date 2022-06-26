// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  const expected = [1];
  equal(result.length, expected.length);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  const expected = [2];
  equal(result[0], expected[0]);
});

test("map() should return an array with the same no.of elements when the no.of elements is more than 1", () => {
  const result = map([1, 2, 3], () => {});
  const expected = [1, 2, 3];
  equal(result.length, expected.length);
});

/*this test fails because arrays are technically objects and whenever you compare one
object to another using == or === you always get false. see section on deep equality
in the unit testing workshop for details but basically instead of comaring the array to
another array, you have to compare each individual element of one to the corresponding element
in the other

test("map() should transform each element of the array using the fn argument when the no.of elements is more than 1", () => {
  const result = map([1, 2, 3, 4], (x) => x + 1);
  const expected = [2, 3, 4, 5];
  equal(result, expected);
});
*/

test("map() should transform each element of the array using the fn argument when the no.of elements is more than 1", () => {
  const result = map([1, 2, 3, 4], (x) => x + 1);
  const expected = [2, 3, 4, 5];

  for (let i = 0; i < result.length; i++) {
    equal(result[i], expected[i]);
  }
  
});

test("map() should not execute the function for empty elements", ()=>{
  let arrayArg = [1, 2,, 4];
  const result = map(arrayArg, (x) => x + 1);
  const expected = [2, 3,, 5];

  for (let i = 0; i < result.length; i++) {
    equal(result[i], expected[i]);
  }

});

test("map() should not change the original array", ()=>{
  let arrayArg = [1, 2, 4];
  const result = map(arrayArg, (x) => x + 1);
  const expected = [1, 2, 4]; //i.e expect the original array to remain unchanged

  for (let i = 0; i < arrayArg.length; i++) {
    equal(arrayArg[i], expected[i]); //i.e comparing the original array (not the result) to the expected 
  }

});

test("map() should allow passing the index of the current element into the function", ()=>{
  let arrayArg = [2, 4, 6, 8];
  const result = map(arrayArg, (x, index) => x + index);
  const expected = [2, 5, 8, 11]; 

  for (let i = 0; i < arrayArg.length; i++) {
    equal(result[i], expected[i]);
  }

});



//testing filter

test("filter() should create a new array filled with elements that pass a test provided by the fn", () => {
  let arrayArg = [11, 14, 36, 68];
  const result = filter(arrayArg, (x) => x > 18);
  const expected = [36, 68];

  for (let i = 0; i < expected.length; i++) {
    equal(result[i], expected[i]);
  }
});

test("filter() should not change the original array", () => {
  let arrayArg = [11, 14, 36, 68];
  const result = filter(arrayArg, (x) => x > 18);
  const expected = [11, 14, 36, 68]; //i.e expect the original array to remain unchanged

  for (let i = 0; i < expected.length; i++) { //used expected.length here in case the original array was changed by the filter
    equal(arrayArg[i], expected[i]); //i.e comparing the original array (not the result) to the expected
  }
});

test("filter() should allow passing the index of the current element into the fn", () => {
  let arrayArg = [3, 4, 1, 2];
  const result = filter(arrayArg, (x, index) => x > index);
  const expected = [3, 4];

  for (let i = 0; i < expected.length; i++) {
    equal(result[i], expected[i]);
  }
});


//testing every
test("every() should always return false when the condition in the argument fn isn't satisfied", ()=>{
  let arrayArg = [1, 2, 18, 25];
  const result = every(arrayArg, (x) =>  x > 18); 
  const expected = false;

  equal(result, expected);
});

test("every() should always return true when the condition in the argument fn IS satisfied", ()=>{
  let arrayArg = [19, 25];
  const result = every(arrayArg, (x) =>  x > 18); 
  const expected = true;

  equal(result, expected);
});

test("every() should allow passing the index of the current element into the fn", ()=>{
  let arrayArg = [1, 2, 3];
  const result = every(arrayArg, (x, index) =>  x > index); 
  const expected = true;

  equal(result, expected);
});


//testing some
test("some() should always return false when the condition in the argument fn isn't satisfied", ()=>{
  let arrayArg = [1, 2, 8, 5];
  const result = some(arrayArg, (x) =>  x > 18); 
  const expected = false;

  equal(result, expected);
});

test("some() should always return true when the condition in the argument fn IS satisfied", ()=>{
  let arrayArg = [19, 21, 38, 45];
  const result = some(arrayArg, (x) =>  x > 18); 
  const expected = true;

  equal(result, expected);
});

test("some() should should allow passing the index of the current element into the fn", ()=>{
  let arrayArg = [0, 6, 0];
  const result = some(arrayArg, (x, index) =>  x > index); 
  const expected = true;

  equal(result, expected);
});



//testing find
test("find() should always return undefined if no elements in the array pass the test fn", ()=>{
  let arrayArg = [7, 8, 9];
  const result = find(arrayArg, (x)=>{return x > 18}); //used return here because the arrow fn has curly braces unlike before
  const expected = undefined;

  equal(result, expected);
});

test("find() should always return the value of the 1st test-passing element in the array (if there are more than one)", ()=>{
  let arrayArg = [7, 28, 59];
  const result = find(arrayArg, (x)=>{return x > 18}); //used return here because the arrow fn has curly braces unlike before
  const expected = 28;

  equal(result, expected);
});

test("find() should allow passing the index of the current element into the fn", ()=>{
  let arrayArg = [7, 4, 19];
  const result = find(arrayArg, (x, index)=>{return x > index + 10}); //used return here because the arrow fn has curly braces unlike before
  const expected = 19;

  equal(result, expected);
});


//testing reduce
test("reduce() should return a single value", ()=>{
  let arrayArg = [0, 1, 7];
  const result = reduce(arrayArg, (total, x)=>{return total + x + 4}, 0); //used return here because the arrow fn has curly braces unlike before
  const expected = 20;

  equal(result, expected);
});

test("reduce() should work even if no initial total argument is passed", ()=>{
  let arrayArg = [3, 1, 8];
  const result = reduce(arrayArg, (total, x)=>{return total + x}); //used return here because the arrow fn has curly braces unlike before
  const expected = 12;

  equal(result, expected);
});