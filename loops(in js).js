//loops in js
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
//console.log(employee1);
for(let i=0;i<employee1.length;i++){
    console.log(employee1[i].fname);
}
//while
let j=0;
while(j<employee1.length){
    console.log(employee1[j].lname);
    j++;
}

//for of
for(let emp of employee1){
    console.log(emp);
}
for(let emp of employee1){
    console.log(emp.lname);
}
for(let emp of employee1){
    console.log(emp.age);
}