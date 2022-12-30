let firstNumber = prompt("Digite o primeiro número: ")
let sencondNumber = prompt("Digite o segundo número: ")

const sum = (Number(firstNumber) + Number(sencondNumber))
const sub = (Number(firstNumber) - Number(sencondNumber))
const multi = (Number(firstNumber) * Number(sencondNumber))
const div = (Number(firstNumber) / Number(sencondNumber))
const restDiv = (Number(firstNumber) % Number(sencondNumber))

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)



let average = sum / 2 
let result = average == 0

if (result) {
    alert("A soma dos dois números é ímpar: " + sum)
    
}
else {
alert("A soma dos dois números é par: " + sum)
}


let numbers = firstNumber === sencondNumber

if(numbers) {
    alert("Os números inseridos são iguais.")
}

else {
    alert("Os números inseridos não são iguais.")
}