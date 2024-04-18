function generateRandomFloat(digitsBeforeDecimal, decimals) {
    // Gera um número aleatório entre 0 e 1
    var randomNum = Math.random();
    // Multiplica o número aleatório pelas casas decimais desejadas
    var multiplied = randomNum * Math.pow(10, decimals);
    // Arredonda o resultado para um número inteiro
    var rounded = Math.round(multiplied);
    // Divide o número arredondado pelo mesmo valor usado para multiplicar
    var result = rounded / Math.pow(10, decimals);
    // Multiplica o resultado pelas casas antes da vírgula desejadas
    result *= Math.pow(10, digitsBeforeDecimal);
    console.log("generate");
    console.log(typeof result) 
    return result; 

}
  
  // Exemplo de uso
  var randomFloat = generateRandomFloat(1, 10).toFixed(2); // Gera um número com 2 dígitos antes da vírgula e 3 casas decimais
  console.log(typeof randomFloat );
  

  function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      // Gera um índice aleatório dentro do comprimento do conjunto de caracteres
      var randomIndex = Math.floor(Math.random() * charactersLength);
      // Adiciona o caractere correspondente ao índice aleatório à string resultante
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  
  // Exemplo de uso
  var randomString = generateRandomString(3); // Gera uma string com 10 caracteres
  console.log(randomString);

  function generateRandomBoolean() {
    if(Math.random() > 0.5) {
        return true;
    } else  {
        return false;    
    }
}

console.log('-------------------')
console.log(generateRandomBoolean())