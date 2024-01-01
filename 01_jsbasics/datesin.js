const dat = new Date
// console.log(dat);
// console.log(dat.toString());
// console.log(dat.toISOString());
// console.log(dat.toDateString());//
// console.log(dat.toTimeString());
// console.log(dat.toLocaleString());//
// console.log(dat.toLocaleDateString());
// console.log(typeof dat);

const mydate = new Date(2024 , 0 , 1 , 19 , 2)
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());

// const creatdate = new Date("2023-01-24") //yy-mm-dd
const creatdate = new Date("01-24-2023")// mm-dd-yy
// console.log(creatdate.toLocaleString());

const timestamp = Date.now()
// console.log(timestamp);
// console.log(creatdate.getTime());

let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getFullYear());

newdate.toLocaleString('default' , {
    weekday: 'long',
})