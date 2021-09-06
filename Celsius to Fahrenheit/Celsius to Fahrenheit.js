/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
  C = (F - 32) * 5/9 
  F = C * 9/5 + 32
*/

function replacement(degree) {
  //================= VARIAVEIS PRINCIPAIS ==================//
  const celsiusExist = degree.toUpperCase().includes('C')
  //toUpperCase = transforma o parametro em caixa alta
  //includes verifica se o parametro recebe a letra "C"
  const fahrenheitExist = degree.toUpperCase().includes('F')
  //toUpperCase = transforma o parametro em caixa alta
  //includes verifica se o parametro recebe a letra "F"

  //===================== FLUXO DE ERRO =====================//

  //FLUXO DE ERRO:
  if (!celsiusExist && !fahrenheitExist) {
    //!+Variavel = se não ouver nem celsius nem fahrenheit
    throw new Error('degree is Undefined')
    //lance para fora o erro "degree is Undefined"
  }

  //=============== FLUXO PRINCIPAL/IDEAL ===============//
  //              (Fahrenheit -> Celsius)               //

  let UpdateDegree = Number(degree.toUpperCase().replace('F', '')) // pega a string passada que neste caso é o '50f' e retira o 'f' e transforma a string '50' para um Number.

  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9
  // Arrow Function que sua função é fazer o calculo de fahrenheit para celsius

  let degreeSign = 'ºC' // armazena a string 'ºC' que será nosso sinal.

  //============= FLUXO SEGUNDARIO/ALTERNATIVO =============//
  //               (Fahrenheit -> Celsius)                 //

  if (celsiusExist) {
    UpdateDegree = Number(degree.toUpperCase().replace('C', '')) // pega a string passada que neste caso é o '50c' e retira o 'C' e transforma a string '50' para um Number.

    formula = Celsius => (Celsius * 9) / 5 + 32
    // Arrow Function que sua função é fazer o calculo de celsius para fahrenheit

    degreeSign = 'ºF' // armazena a string 'ºF' que será nosso sinal.
  }

  //=================== RETORNO DA FUNÇÃO ===================//

  return formula(UpdateDegree) + degreeSign //executa a função passando UpdateDegree como argumento e concatenando seu valor com degreeSign
}

//============== TESTA A FUNÇÃO/ARMAZENA ERRO ==============//

try {
  console.log(replacement('50c'))
  console.log(replacement('50f'))
} catch (error) {
  console.log(error.message)
}

//  OBS: Estudar Expressões Regulares
