let employee1=[
    {
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
    },
    {
        id:102,
        fname:'bbb',
        lname:'ccc',
        age:23,
        dateofjoin:"5/3/2021",
    address:{
        city:"kurinjipadi",
        state:"tamilnadu"
    },
    skills:['html','css','js'],
    //method inside object
    fullName:function(){
        return `I am ${this.fname} ${this.lname}`
    },
    },
    {
        id:103,
        fname:'dddd',
        lname:'eeee',
        age:25,
        dateofjoin:"2/9/2021",
    address:{
        city:"kurinjipadi",
        state:"tamilnadu"
    },
    skills:['html','css','js'],
    //method inside object
    fullName:function(){
        return `I am ${this.fname} ${this.lname}`
    },
    }
];
console.log(employee1);
//access based on index value of array
console.log(employee1[0]);
//access based on index value of array
console.log(employee1[2].fname);
//access array and object inside of array
console.log(employee1[2].skills[0]);

console.log(employee1[2].address.city);
console.log(employee1[2].fullName());

//stringify
const employeejson=JSON.stringify(employee1);
console.log(employeejson);

const employeearry=JSON.parse(employeejson);
console.log(employeearry);