//Array
const framework=['react','angular','vue'];
const db=new Array('db2','sql','mysql','mongodb');

//access array

console.log(framework);
console.log(db);
//access array in single value

console.log(framework[1]);
console.log(db[0]);
//update
db[0]='orcal';
console.log(db);

//array method
console.log(framework.length);
//sort
console.log(framework.sort());

//remove element first,last element
//shift
console.log(framework.shift());
console.log(framework);
//pop
console.log(framework.pop());
console.log(framework);
//unshift
console.log(framework.shift());
console.log(framework); //after pop,shift answer will display

//add element first,last element
//pope
console.log(framework.push("nextjs"));
console.log(framework);
//shift
console.log(framework.unshift("ract"));
console.log(framework);//after push,unshift answer will display


//datatype
console.log(typeof framework);
console.log(Array.isArray(framework));
console.log(framework instanceof Array);