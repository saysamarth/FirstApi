const prompt= require("prompt-sync")()
console.log("1. ADDITION\n2. SUBTRACTION\n3. MULTIPLICATION\n4. DIVISION" )
var act= prompt("Enter Which Action You Want To Perform:- ") 
let result=1

function add(){
    while(true){
        num = parseFloat(prompt("Enter a number:"))
        if(num == '\n' || isNaN(num))
            break
        result += num
    }
}

function sub(a){
    while(true){
        num = parseFloat(prompt("Enter a number:"))
        if(num == '\n' || isNaN(num))
            return(a)
        a -= num
    }
}

function multiply(){
    while(true){
        num = parseFloat(prompt("Enter a number:"))
        if(num == '\n' || isNaN(num))
            break
        result *= num
    }
}

function divide(a){
    while(true){
        num = parseFloat(prompt("Enter a number:"))
        if(num == '\n' || isNaN(num))
            return(a)
        a/=num
    }
}

if(act==1){
    add()
    console.log(result-1)
}
else if(act==2){
    var i=prompt("Enter the First number:- ")
    console.log(sub(i))
}
else if(act==3){
    multiply()
    console.log(result)
}
else if(act==4){
    var i=prompt("Enter the First number:- ")
    console.log(divide(i))
}
else
    console.log("Wrong Digit Entered!!!")
 