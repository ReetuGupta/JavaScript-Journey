const accountId = 1111; // can not be redefined
let accountEmail = "reetu@gmail.com"; // prefered
var accountPassword = "1234"; // not to use bcz of scope issue
accountCity = "Lucknow"; // this is also method 
let accountState; // output=> undfined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // this will give tabular form with all the values