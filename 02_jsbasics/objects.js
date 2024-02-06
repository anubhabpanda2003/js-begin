
const mySym = Symbol("key1"); 
const jsUser = {
    name :"Anubhab",
    age : 21,
    class:14 ,
    email : "anubhabpanda990@gmail.com",
    isLogged: true,
    [mySym]:"mykey1",
    arr:[1,2,3,4],
    "fullname": "Anubhab Panda",
}
// console.log(jsUser.age);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);
// jsUser.email = "anubhabpanda980@gmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "anubhabpanda980@gmail.com";
// console.log(jsUser);
jsUser.greeting = function () {
    console.log("Hello World!")
}
// console.log(jsUser.greeting());
// console.log(jsUser.greeting);
jsUser.greetingTwo = function () {
    console.log("hellour age is " +jsUser.age );
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greetingTwo());