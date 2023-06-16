//simple function
function datafunctionnmae(){
    console.log("hi all");
}
console.log(datafunctionnmae());

//pass arg and parameter
function showtext(text){console.log(text);
}
console.log(showtext("hi all good morning"));

//Arrow function
let arrowfun=()=>"arthi";
console.log(arrowfun());

//two para
function mult(a,b){
    return a*b;
}
console.log(mult(5,2));

//es6 function
const showtextes6=(text,text1)=>
console.log(`${text} ${text1}`)
console.log(showtextes6('goodmornig',"goodevening"))

//constructor object

function Mobile(brand,price,version){
this.brand=brand;
this.price=price;
this.version=version;
}
//ADD property in object using prototype
Mobile.prototype.ram="4gb";
//SINGLE
const iphone=new Mobile("iphone","2,50000","4");
console.log(iphone);
//MULTI
const iphone1=new Mobile("iphone1","2,50000","1");
const iphone2=new Mobile("iphone2","2,70000","2");
const iphone3=new Mobile("iphone3","2,80000","3");
console.log(iphone1,iphone2,iphone3);


//setTimeout
//normal function
setTimeout(function(){
    console.log("hello world after 2 sec")
},2000);
 //anymous function
setTimeout(()=>{
    console.log("hello world after 2 sec")
},2000);
 //arrow function
 const arrowsettimeout=()=>
    console.log("hello world after 1 sec")
setTimeout(arrowsettimeout,1000);
 
//
let Member1={
    name:"arthi",
    disname:function(){
        console.log(this.name);
        setTimeout(function(){
            console.log(this.name)
        },5000)
    }
}
Member1,Member1.disname();