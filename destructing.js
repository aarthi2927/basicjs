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

console.log(employee1.fullName());

//es6 destructing properties
const {fname,age}=employee1;
console.log(fname);
console.log(age);

const {address:{city}}=employee1;
console.log(city);
//console.log(lname);//error
//es6 destructing method
function displayemp(employee1){
    console.log(`the employ name is ${employee1.name} and age is ${employee1.age}`)
}
displayemp(employee1);



//Array
const myskill=['html','css','js','react','node','mongodb'];
const sk1=myskill[0];
const sk2=myskill[1];
console.log(sk1);
console.log(sk2);
//replace this method in array destructor
const[skill1,skill2,skill3]=myskill;
console.log(skill1);
console.log(skill2);
console.log(skill3);
//use rest operator
/*const[skill01,,skill02,...rest]=myskill;

console.log(rest);
*/
//array and object in same time

const datalist=[
    {
        item:"apple",price:25,cat:"fruits"
    },
    {
        item:"mango",price:35,cat:"fruits"
    },
    {
        item:"tomato",price:15,cat:"veg"
    },
    {
        item:"milk",price:65,cat:"misc"
    },
    {
        item:"egg",price:18,cat:"misc"
    }
];
//normal way
console.log(datalist[0].item);
//destructing
const[apple]=datalist;
console.log(apple);
const[{item},...rest]=datalist;
console.log(item);
console.log(rest);

//Array and object
const company={
    name:"google",
    loc:['sing','ind','germa','nep']
}
console.log(company.name);
console.log(company.loc[1]);

//map
const users=[['a1','b1'],['a2','b2'],['a3','b3'],];
[
    {
        fname:'a1',lname:'b1',
    },
    {
        fname:'a2',lname:'b2',
    },
    {
        fname:'a3',lname:'b3',
    }
];
const u1object=users.map(([fname,lname])=>{
    /*return{
        fname:fname[0],lname:lname[1]
    }*/
    return{fname,lname}
});
console.log(u1object);