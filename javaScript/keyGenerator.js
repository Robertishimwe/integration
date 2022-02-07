// first part of the key

let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alpha = ["a","b","c","d"];
let as = Math.floor(Math.random()*(3-0)+0)
let keySectionTwo = alpha[as]
// third part of the key

let keySectionThree = Math.floor(Math.random() * (90-10)+10);
//final key

let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;

