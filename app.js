// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = ((127.9 / valueInYen) * 0.8).toFixed(1);
    //return the pound value
    return Number(valueInPound);
}
console.log(fromYenToPound(10));

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = ((valueInDollar / 1.2) * 127.9).toFixed(1);
    //return the yen value
    return Number(valueInYen);
}
console.log(fromDollarToYen(100));

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };