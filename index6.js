//Problema 6:

class Calculadora{
    constructor(){
    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    exponencial(num,exp){
        return num**exp;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();
alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: exponente, 6: raíz cuadrada, 7: raíz cúbica");

//let numero1 = prompt("Primer número para sumar");
//let numero2 = prompt("Segundo número para sumar");

const result = (operacion) => {
    switch (operacion) {
        case 1:
            let numerosSumas = 0;
            while (true) {
                let contador = 1;
                let dato = prompt(`Ingrese el Numero ${contador++}: (Presione 0 para culminar)`);
                try {
                    console.log(typeof (dato)); // "dasdasdas2"
                    dato = parseInt(dato); // "adsdas"
                    console.log(typeof (dato));
                    if (dato === 0)
                        break;
                    numerosSumas += dato;

                } catch (e) {
                    console.log("\nTipo de Dato No Aceptado\n" + e.message);
                }
            }
            alert(`Tu resultado es ${numerosSumas}`);
            break;
        case 2:
    }
}

if (parseInt(operacion) === 1) {
    console.log("Mensaje");
    result(operacion);
    console.log("Mensaje 2");
    result(operacion);
}

else if (operacion == 2) {
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero = prompt("Número que quieras potenciar");
    let exponente = prompt("Número del exponente");
    resultado = calculadora.exponencial(numero,exponente);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 6) {
    let numero1 = prompt("Número que se va a reducir");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Número que se va a reducir");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else {
    alert("No se a encontrado la operación")
}