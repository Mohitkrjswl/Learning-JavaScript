// singleton
//  object.literals

const JsUserser= {
    name: "Mohit Kr",
        age: 23,
        Location:"Delhi",
        isLoggedin:false,
        lastLoginDays:["Monday","Saturday"]


}
console.log(user.age);
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mohitkrjswl.com"
// Object.freeze(JsUser)
JsUser.email = "mohitkrjswl@git.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());