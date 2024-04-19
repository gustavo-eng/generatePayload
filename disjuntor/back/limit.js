let sizeForType = {
    string: 8,
    number: { decimalCase: 2, pontoFlutuante: 4 }, // Ex 20.20
    boolean: "1",
  };
  
  let number0fVariablePerType = {
    string: 8,
    number: 1,
    bool: 1,
  };
  

  let pacoteDeDados = 240;
  const attributeLimit = 1023;
  const attributeName = "status_breakdownFailure_status_s_inst_";
  
  let qtdVariabel = Object.values(number0fVariablePerType).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const payloadTest = {};
  const limitList = [];
  
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
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  
  function generateRandomBoolean() {
    if (Math.random() > 0.5) {
      return "1";
    } else {
      return "0";
    }
  }
  
  Array.from({ length: qtdVariabel }).forEach((_, index) => {
    payloadTest[attributeName + index] = [];
  });
  
  let oncePerKey = true;
  Object.keys(payloadTest).forEach((key, index) => {
    oncePerKey = true;
    if (index + 1 <= number0fVariablePerType.number) {
      for (let k = 0; k < pacoteDeDados; k++) {
        payloadTest[key].push(Number(generateRandomFloat(sizeForType.number.decimalCase, 20).toFixed(sizeForType.number.pontoFlutuante)));
        if(JSON.stringify(payloadTest[key]).length >= attributeLimit && oncePerKey) limitList.push({ att: key, limit: k, type: 'number' }), oncePerKey =false;       
      }
    } else if (index + 1 > number0fVariablePerType.number &&  index + 1 <= number0fVariablePerType.number + number0fVariablePerType.bool ) {
      // boolean
      for (let k = 0; k < pacoteDeDados; k++) {
        payloadTest[key].push(generateRandomBoolean());
        if(JSON.stringify(payloadTest[key]).length >= attributeLimit && oncePerKey) limitList.push({ att: key, limit: k, type: 'boolean' }), oncePerKey =false;    
      }
    } else {
      for (let k = 0; k < pacoteDeDados; k++) { 
        payloadTest[key].push(generateRandomString(sizeForType.string));
        if(JSON.stringify(payloadTest[key]).length >= attributeLimit && oncePerKey) limitList.push({ att: key, limit: k,  type: 'string'}), oncePerKey =false;          
      }
    }
    
  });
