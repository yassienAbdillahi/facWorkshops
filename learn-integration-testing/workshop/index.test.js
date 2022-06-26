//challenge1
test("Correctly performs addition with positive numbers", ()=>{
    const result = calculate(1, "+", 3);
    const expected = 4;
    equal(result, expected, "this function correctly added 1 and 3");
});

test("Correctly performs subtraction with positive numbers", ()=>{
    const result = calculate(11, "-", 3);
    const expected = 8;
    equal(result, expected, "this function correctly subtracted 3 from 11");
});

test("Correctly performs multiplication with positive numbers", ()=>{
    const result = calculate(5, "*", 4);
    const expected = 20;
    equal(result, expected, "this function correctly multiplied 5 and 4");
});

test("Correctly performs division with positive numbers", ()=>{
    const result = calculate(12, "/", 6);
    const expected = 2;
    equal(result, expected, "this function correctly divided 12 by 6");
});

//this test below fails because the two strings just get concatenated rather than added
//that is until I changed the calculate function to use parse.float on the arguments
test("Correctly performs addition with strings instead of numbers", ()=>{
    const result = calculate("15", "+", "8");
    const expected = 23;
    equal(result, expected, "this function correctly added 15 and 8 even though they were input as strings");
});

test("Correctly returned the error message when invalid sign inputted", ()=>{
    const result = calculate(1, "!", 3);
    const expected = "Please enter a valid sign (+, -, *, /)";
    equal(result, expected, "this function returned the appropriate error");
});

//challenge2
test("Adds the user's inputted a and b once they are submitted", ()=>{
   let a = document.querySelector("input[name='a']");
   //note for lines 42 and 47: if you use document.querySelector("#a") for eg, it doesn't work
   //why though?
   a.value = "4";

   let sign = document.querySelector("#sign");
   sign.value = "+";

   let b = document.querySelector("input[name='b']");
   b.value = "6";

   const submitButton = document.querySelector("button[type='submit']");
   submitButton.click();

    let result = document.querySelector("#result");
    const expected = "10";

    equal(result.innerHTML, expected, "the calculator form correctly added the user's a and b inputs");

    result.innerHTML = "";
});

