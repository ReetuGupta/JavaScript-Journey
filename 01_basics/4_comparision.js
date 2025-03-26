// These are simple comparisions bcz datatypes are same

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Comparision with different datatypes creates confusion some times bcz they are unpredictable

//  console.log("2" > 1); //true
//  console.log("02" > 1); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

//== and >< >= <= work differently
//== converts null to number, treating it as 0 so null >= 0 is true

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); //false

//strict check => ===

console.log("2" === 2) // false
