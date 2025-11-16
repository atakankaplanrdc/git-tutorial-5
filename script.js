function multiple(firstNumber){
    return function multipleWithSecond(secondNumber) {
        return firstNumber * secondNumber;
    }
}

let number1 = Number(prompt("Birinci sayiyi giriniz:"));
let number2 = Number(prompt("Birinci sayiyi giriniz:"));

let multipleWith = multiple(number1);
console.log("Result: " + multipleWith(number2));