//key generator

// first part of the key

let keySectionone = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alphab = ["a","b","c","d"];
let ass = Math.floor(Math.random()*(3-0)+0)
let keySectiontwo = alphab[ass]
// third part of the key

let keySectionthree = Math.floor(Math.random() * (90-10)+10);
//final key

let keys = `${keySectionone}${keySectiontwo}${keySectionthree}`;






let subscriptionFetcher = () =>{
    let email2 = document.getElementById("email2").value;
    let finalEmail=email2.toLowerCase();
    let subscriptionInfo = {
        email: `${finalEmail}`,
        type : `subscription`
        
    }
    console.log(subscriptionInfo)
    localStorage.setItem(keys, JSON.stringify(subscriptionInfo))
}