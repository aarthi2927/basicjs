console.log(window);
console.log(this);
console.log(window.location);
console.log(window.document);
//single element
console.log(document.getElementById("contact_2"));
console.log(document.querySelector("section"));
//multi element
console.log(window.document.getElementsByClassName("item1"));
console.log(window.document.getElementsByTagName("li"));
console.log(document.querySelectorAll("li"));

//line by line output
const nodelist=document.querySelectorAll("li");
nodelist.forEach((nodeli)=>{
    console.log(nodeli);
})

/*
//manipulating dom elements
const h3=document.querySelector('.contact_2>h3');
h3.innerText="contact List";
//h3.textContent="contact List";
const li1=document.querySelector('.contact_2>ul');
li1.firstElementChild.innerText="HTML";
li1.lastElementChild.textContent="NODE";
li1.children[1].innerHTML="CSS";
li1.children[2].innerText="JS";
//STYLING IN DOM
li1.children[2].style.background="red";
li1.children[0].style.color="yellow";

/*
//event
const btn=document.getElementById("toggle");
btn.addEventListener("click", (e)=>{
    console.log(e);
    const ul=document.querySelector(".contact_2>ul");
    if(ul.style.display ==='block'){
ul.style.display ='none';
    } 
    else{
        ul.style.display ='block'
    }
})
*/


//form validation

const myform=document.querySelector("form");
const name=document.getElementById("name");
const email=document.getElementById("email");
const msg=document.querySelector("msg");
myform.addEventListener("submit",onSubmit)
function onSubmit(e){
//console.log('clicked'); autorefresh
e.preventDefault();
 if(name.value==="" || email.value ===""){
    //console.log("not fill")
    msg.style.display="block";
    msg.textContent="not fill";
 }
 else{
    //console.log("success");
    
 }
}