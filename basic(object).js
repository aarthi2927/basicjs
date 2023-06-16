//object in js
let employee={};
console.log(employee);
console.log(typeof employee);

let employee1={
    id:101,
    fname:'arthi',
    lname:'karunanithi',
    age:22,
    dateofjoin:"2/9/2022",
address:{
    city:"kurinjipadi",
    state:"tamilnadu"
},
skills:['html','css','js'],
//method inside object
fullName:function(){
    return `I am ${this.fname} ${this.lname}`
},
};
console.log(employee1);
console.log(employee1.id);
console.log(employee1.fname);
console.log(employee1.lname);
console.log(employee1.age);
console.log(employee1.dateofjoin);

//object inside of object
console.log(employee1.address);
console.log(employee1.address.city);
console.log(employee1.address.state);

//array inside of object
console.log(employee1.skills);
console.log(employee1.skills[0]);

//method inside of object
console.log(employee1.fullName());