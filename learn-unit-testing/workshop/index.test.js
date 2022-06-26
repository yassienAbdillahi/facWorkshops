//challenge1
test("Correctly adds pikachu to the poke api url", ()=>{
    const result = makeUrl("pikachu");
    const expected = "https://pokeapi.co/api/v2/pikachu";
    equal(result, expected, "this function added pikachu to the poke api url correctly");
}); 


//challenge2 test
test("Correctly converts form string into an object", ()=>{
    const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
    const expected = {name: "oliver", email: "hello@oliverjam.es"};
    for (let x in result) {
        equal(result[x], expected[x], "this function turned the form string into an object correctly");
    }
});



//challenge3 test
test("Correctly checks if a given recent, positive year (2012) is a leap year", ()=> {
    const result = isLeapYear(2012);
    const expected = true;
    equal(result, expected, "this function correctly evaluated the leapiness of the year 2012");
});

test("Correctly checks if a given ancient, positive year (12) is a leap year", ()=> {
    const result = isLeapYear(12);
    const expected = true;
    equal(result, expected, "this function correctly evaluated the leapiness of the year 12");
});

test("Correctly checks if a given near, future positive year (2028) is a leap year", ()=> {
    const result = isLeapYear(2028);
    const expected = true;
    equal(result, expected, "this function correctly evaluated the leapiness of the year 2028");
});

test("Correctly checks if a given far-future, positive year (2412) is a leap year", ()=> {
    const result = isLeapYear(2412);
    const expected = true;
    equal(result, expected, "this function correctly evaluated the leapiness of the year 2412");
});

test("Correctly checks if a given negative year (-2012) is a leap year", ()=> {
    const result = isLeapYear(-2012);
    const expected = false;
    equal(result, expected, "this function correctly evaluated the leapiness of the year -2012");
});

test("Correctly checks if a given recent, positive year (2013) is a leap year", ()=> {
    const result = isLeapYear(2013);
    const expected = false;
    equal(result, expected, "this function correctly evaluated the leapiness of the year 2013");
});

test("Correctly checks if a string (`2012`) is a leap year", ()=> {
    const result = isLeapYear("2012");
    const expected = false;
    equal(result, expected, "this function correctly evaluated to false when a string was passed");
});

test("Correctly checks if an array is a leap year", ()=> {
    const result = isLeapYear([2012]);
    const expected = false;
    equal(result, expected, "this function correctly evaluated to false when an array was passed");
});