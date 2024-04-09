//non - singelton
//Objects.create

//object literal

const mySym=Symbol("key1");

const JsUser = {
    name: "Rajat", //key is always string
    "full name": "Rajat Gupta",
    [mySym]:"myKey2", // used to descibe symbol
    mySy : Symbol("key1"),
    age : 18,
    location:"jaipur",
    email:"rg@gmail.com",
    isLoggedIn:false
}

console.log(JsUser.email)
console.log(JsUser["email"]) //key used as an string
console.log(JsUser["full name"])
console.log(JsUser.mySym)
console.log(JsUser[mySym])
console.log(mySym);

JsUser.email="rajat@yahoo.com"

//Object.freeze(JsUser)

JsUser.email="andnd"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

console.log(JsUser.greeting2)
console.log(JsUser.greeting2())