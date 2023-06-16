function multi(a,b){
    return a*b;
}
console.log(multi(5,10));

//es6
function multi1(a,b){
   b= b || 1;
    return a*b;
}
console.log(multi1(2));
//es6 method 2 default parameter
function multi2(a,b=10){
   
     return a*b;
 }
 console.log(multi2(2));
 //es6 method 2 default parameter
function multi3(a,b=10){
   
    return a*b;
}
console.log(multi3(2,3));

//
function makeapi(url,method='GET'){
   
   console.log("url",+ url);
   console.log("method",+ method);
}
console.log(makeapi('www.google.com','PUT'));