// Stack(Primitive)  Heap(Non-primitive)
// let val1 ="Anubhab";
// let val2 = val1;
// val1 = "Panda";
// console.log (val1);
// console.log (val2);

let user1 = {
    name: "Anubhab Panda",
    age: 21,
    id: true
}
let user2 = user1;
user1.age = 22;
console.log(user1);
console.log(user2);
