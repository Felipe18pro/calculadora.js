const prompt = require('prompt-sync')({sigint: true})

console.log('CALCULADORA')

    do{

    var primeiro = parseFloat(prompt('Qual é o primeiro numero? '))
    var segundo = parseFloat(prompt('Qual é o segundo numero? '))

    if(isNaN(primeiro) || isNaN(segundo)){
    console.log('Numero inválido tente novamente!')
    }
    else{
    var operador = prompt('Qual a operação desejada(+|-|*|/|%)? ')
    break
    }

    }while(true)
    switch (operador){
    case '+':
        console.log(primeiro + segundo)
        break;
    case '-':
        console.log(primeiro - segundo)
        break;
    case '*':
        console.log(primeiro * segundo)
        break;
    case '/':
        console.log(primeiro / segundo)
        break
    case '%':
        console.log((primeiro * segundo) / 100)
        break;
        default:
            console.log('Nao é um operador válido!')
            break
}


