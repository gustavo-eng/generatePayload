
const payloadTest = {};

let  sizeForType = {
    "string": 8,
    "number": {"decimalCase": 8, "pontoFlutuante": 1}, // Ex 20.20
    "boolean":true 
}

let number0fVariablePerType = {
    "string": 2,
    "number":4,
    "bool": 2
}

let pacoteDeDados = 230; 

let qtdVariabel = Object.values(number0fVariablePerType).reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

//function generateRandomFloat(decim)
function generateRandomFloat(digitsBeforeDecimal, decimals) {

    var randomNum = Math.random();
    var multiplied = randomNum * Math.pow(10, decimals);
    var rounded = Math.round(multiplied);
    var result = rounded / Math.pow(10, decimals);
    result *= Math.pow(10, digitsBeforeDecimal);

    return result;
}


function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
}


function generateRandomBoolean() {
    if(Math.random() > 0.5) {
        return 1; //true
    } else  {
        return 0; // false
    }
}

let biggerAttrFromActive = "status_breakdownFailure_status_s_inst_"

Array.from({length: qtdVariabel}).forEach((_, index) => {
    payloadTest[biggerAttrFromActive+(index+1)] = [];
}); 

Object.keys(payloadTest).forEach((key, index) => {
    //payloadTest[key].push(generateRandomString(sizeForType.string)); 
    if(index + 1 <= number0fVariablePerType.number) {
        for(let k = 0;  k < pacoteDeDados; k++) {
            payloadTest[key].push(Number(generateRandomFloat(sizeForType.number.decimalCase, 20).toFixed(sizeForType.number.pontoFlutuante))); 
        } 
    } else if ( (index + 1) > number0fVariablePerType.number && (index + 1) <= (number0fVariablePerType.number +  number0fVariablePerType.bool)) { // boolean  
        for(let k = 0;  k < pacoteDeDados; k++) {
            payloadTest[key].push(generateRandomBoolean()); 
        } 
    } else  {
        for(let k = 0;  k < pacoteDeDados; k++) {
            payloadTest[key].push(generateRandomString(sizeForType.string)) 
        }
    } 
});

// Adicionar código do Guilherme 



