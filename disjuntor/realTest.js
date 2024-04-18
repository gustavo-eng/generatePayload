
//todo Verificar o tamanho de cada string 
// no final o atributo deve corresponder a quantidade máxima de string segundo 
// a documentação da plataforma 
/*
const payload = {

    "contactWear": [0.2, 0.33] // string 
    "currentCoil": [0.32], //string
    "currentMotor": [54], // string
    "daysWithoutChange": [189], //string
    "dewPointSf6": 234 // string 
    "pressureSf6_phase_1_u_s_stat": [3.5,5,6.243], //3, 
    "pressureSf6_phase_2_u_s_stat": [], //3, 
    "pressureSf6_phase_3_u_s_stat": ['3.34'], //3, 
    "status_blocker_status_s_inst": [], //false,
    "status_breakdownFailure_status_s_inst" : [], //true, 
    "status_closedCoil1_status_s_inst" : [], // true, 
    "status_closedCoil2_status_s_inst" : [], //true, 
    "status_mainContact_status_s_inst" : [], // true, 
    "status_motor_status_s_inst" : [], //true, 
    "status_openCoil1_status_s_inst" :[],// true, 
    "status_openCoil2_status_s_inst" : [], // true, 
    "status_poleDiscordanceRelay_status_s_inst" : [], //true, 
    "status_reclosing_status_s_inst" :  true, 
    "status_voltageRelayAC_status_s_inst" : true, 
    "status_voltageRelayDC_status_s_inst" : true, 
    "temperatureSF6_phase_1_u_s_stat" : 1713302100000, // string 
    "temperatureSF6_phase_2_u_s_stat" : 1713302100000, // string
    "temperatureSF6_phase_3_u_s_stat" : 1713302100000,  // string 
    "timestamp": [412413134134124] // string 

};
*/ 

// let valor1 = [3.4]



let  sizeForType = {
    "string": 8,
    "number": {"decimalCase": 2, "pontoFlutuante": 4}, // Ex 20.20
    "boolean":true 
}

let number0fVariablePerType = {
    "string": 2,
    "number":4,
    "bool": 2
}

let pacoteDeDados = 230; 


let qtdVariabel = Object.values(number0fVariablePerType).reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
const payloadTest = {};

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
    
    if(index + 1 <= number0fVariablePerType.number) {
        for(let k = 0;  k < pacoteDeDados; k++) {
            //payloadTest[key].push(generateRandomString(sizeForType.string)); 
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


console.log(payloadTest);

// desenvolver funcao que print o tamanho em bytes de cada atributo 
// levando em consideração que cada atributo possui um tamanho de máximo de atributos aceitáveis


// console.log(payloadTest)
/*



console.log(ob.vetorString)
console.log(ob.vetorNumber)

console.log(JSON.stringify(ob))

/*
console.log('\n \n \n')
console.log('**')
console.log(payloadTest)
*/







//for(let i = 0; i < )
/*
const payloadTest2 = {
    valor: 12,
    vet: [1,2,3],
    boleano: true
}

let payloadTest3 = JSON.stringify(payloadTest2)

console.log(typeof payloadTest3)

*/




/*
//Antes de ser stringfado
console.log(' == Antes de ser stringfado == '); 
console.log(payloadTest)
console.log(typeof payloadTest.valor)
console.log(typeof payloadTest.boleano)

console.log(" ** Depois  de ser stringfado ** ")
console.log(JSON.stringify(payloadTest))

let p = JSON.stringify(payloadTest)
console.log(typeof p )
console.log('----')
console.log(typeof JSON.parse(p).boleano)
*/

//Depois de stringFado 