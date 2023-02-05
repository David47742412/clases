//Problema 2: Entrada permitida solo para mayores de edad y pagas tu entrada dependiendo de la hora 

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis ya que eres la primera persona despues de las 2");
            free = true;
        } else {
            alert(`Son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrada`);
        }
    } else {
        alert("No cumples con la mayoría de edad para ingresar.");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);