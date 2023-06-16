//higher oder array method
//foreach
//

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
//foreach
employee1.forEach(function(emp){
    console.log(emp.age);
})
//map
const fnamelist=employee1.map(function(emp){
    return emp.fname;
})
console.log(fnamelist);
//filter
const filterlist=employee1.filter(function(emp){
    return emp.age<=23;
})
console.log(filterlist);
//combine map and filter 
const filterlist1=employee1.filter(function(emp){
    return emp.age<=23;
}).map(function(emp){
    return emp.fname
})
console.log(filterlist1);