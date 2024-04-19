let constructedObjectAttributes = {"attributes":[]}; 
const payloadTest = {};
let biggerAttrFromActive = "status_breakdownFailure_status_s_inst_"
let pacoteDeDados = 10; 

// string: {"size: 234", "isNumeric": true,  configNumber: {"decimalCase": 8, "pontoFlutuante": 1}, chars: 8  }

let  sizeForType = {
    "string": 8,
    "number": {"decimalCase": 8, "pontoFlutuante": 1}, // Ex 20.20
    //"boolean":true 
}

let number0fVariablePerType = {
    "string": 2,
    "number":1,
    "bool": 0
} 


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


//Função utilizada para criar o objeto 
Object.keys(payloadTest).forEach((nameAttr, index) => {

    let dataType = '';
    
    if(index + 1 <= number0fVariablePerType.number) {
        dataType = "number";
    } else if( (index + 1) > number0fVariablePerType.number && (index + 1) <= (number0fVariablePerType.number +  number0fVariablePerType.bool)) {
        dataType = "boolean";
    } else  {
        dataType = "string";
    } 
    dataType = "string"; // forced 

    constructedObjectAttributes["attributes"].push({
        "name": nameAttr, 
        "dataType": dataType,
    })
    
}); 



let payload = {}

for(const [key, value] of Object.entries(payloadTest)) {

    payload[key] = value
    //payload[key] = JSON.stringify(value); 
}

//console.log(" *** payload *** ");

console.log(typeof payloadTest["status_breakdownFailure_status_s_inst_1"]);
console.log(payloadTest["status_breakdownFailure_status_s_inst_1"]);


console.log('=======')
console.log(constructedObjectAttributes)

