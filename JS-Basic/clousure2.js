function getCapital(capital){
    return function(interest){
        return (capital * interest) / 100;
    };
}

const business1 = getCapital(500);
console.log(business1);
const profit = business1(25);  
console.log(profit);

function multiply(){
    let value = 1;
    function mul(){
        value = value * 2;
    return value;
    }
    return mul;
}
const mul1 = multiply();
console.log(mul1());
console.log(mul1());