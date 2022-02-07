




const userRegister = ()=> {
    userName = document.querySelector(".userName").value;
    userEmail = document.querySelector(".userEmail").value;
    password1 = document.querySelector(".userPassword").value;


const UserRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

        userName:userName,
        userEmail:userEmail,
        userPassword:password1


    })
};

fetch('https://my-brand-api-v2.herokuapp.com//api/user/register', UserRequestOptions)
    .then(response => response.json())
    .then(data => data);
}
module.exports = userRegister
// console.log(userOpt)