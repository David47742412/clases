class Sumar {
    constructor(numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    valor = (numero1, numero2) => {
        return numero1 + numero2;
    }

}



const clase = new Sumar(1, 2);

console.log("\n");
console.log(clase.valor(2, 4));
console.log("\n");