var p = 50000
const r = 10
var t = 0.5
//var interest 

function simpleInterestCalculator(){
   let interest = (p*r*t)/100;
   console.log("Simple Interest = ", interest)
}

function main(){
    simpleInterestCalculator() 
}

main();