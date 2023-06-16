//if
let x=9;
if(x==10){
    console.log("x is equal to 10");
    }
    else{
        console.log("x is not equal to 10");
        }
        //if else if
let y=20;
if(y==10){
    console.log("x is equal to 10");
    }
    else if(y<5){
        console.log("y is less to 5");
        }
        else{
            console.log("x is not equal to 10");
            } 
        
           // we use a operator also condition operator
           let z=20
           if(z==10 || z >10)  {
            console.log("x is equal to 10");
            }
            else{
                console.log("z is not equal to 10");
                }

                //ternary operator

console.log((z==40)?"value is equal to 40":"value is less then 40");                

//switch
const data= "react";
switch(data){
    case "html":
        console.log('i known only html');
        break;
        case "css":
            console.log('i known only css');
            break;
            case "js":
                console.log('i known only js');
                break;
                default:
                    console.log("i don't know in programming");
                    break;
}