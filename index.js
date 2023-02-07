//Problema 0: Saber cuanto dinero tiene cada uno y sugerir el helado mas caro al alcance del dinero que tienen y que tambien diga el dinero que sobra.

let dineroJuan = prompt("¿Cuánto dinero tienes Juan?");
let dineroPedro = prompt("¿Cuánto dinero tienes Pedro?");
let dineroLuis = prompt("¿Cuánto dinero tienes Luis?");

dineroJuan = parseInt(dineroJuan);
dineroPedro = parseInt(dineroPedro);
dineroLuis = parseInt(dineroLuis);

if (dineroJuan >= 0.6 && dineroJuan < 1) {
    alert("Juan, compra el helado de agua");
    alert("Y te sobran " + (dineroJuan - 0.6));
}
else if (dineroJuan >= 1 && dineroJuan < 1.6) {
    alert("Juan, compra el helado de crema");
    alert("Y te sobran " + (dineroJuan - 1));
}
else if (dineroJuan >= 1.6 && dineroJuan < 1.7) {
    alert("Juan, compra el helado de heladix");
    alert("Y te sobran " + (dineroJuan - 1.6));
}
else if (dineroJuan >= 1.7 && dineroJuan < 1.8) {
    alert("Juan, compra el helado de heladovich");
    alert("Y te sobran " + (dineroJuan - 1.7));
}
else if (dineroJuan >= 1.8 && dineroJuan < 2.9) {
    alert("Juan, compra el helado de helardo");
    alert("Y te sobran " + (dineroJuan - 1.8));
}
else if (dineroJuan >= 2.9) {
    alert("Juan, compra el helado con confites o el pote de 1/4kg");
    alert("Y te sobran " + (dineroJuan - 2.9));
} else {
    alert("Lo siento Juan, no te alcanza para ningún helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra el helado de agua");
    alert("Y te sobran " + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, compra el helado de crema");
    alert("Y te sobran " + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, compra el helado de heladix");
    alert("Y te sobran " + (dineroPedro - 1.6));
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, compra el helado de heladovich");
    alert("Y te sobran " + (dineroPedro - 1.7));
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, compra el helado de helardo");
    alert("Y te sobran " + (dineroPedro - 1.8));
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, compra el helado con confites o el pote de 1/4kg");
    alert("Y te sobran " + (dineroPedro - 2.9));
} else {
    alert("Lo siento Pedro, no te alcanza para ningún helado");
}

if (dineroLuis >= 0.6 && dineroLuis < 1) {
    alert("Luis, compra el helado de agua");
    alert("Y te sobran " + (dineroLuis - 0.6));
}
else if (dineroLuis >= 1 && dineroLuis < 1.6) {
    alert("Luis, compra el helado de crema");
    alert("Y te sobran " + (dineroLuis - 1));
}
else if (dineroLuis >= 1.6 && dineroLuis < 1.7) {
    alert("Luis, compra el helado de heladix");
    alert("Y te sobran " + (dineroLuis - 1.6));
}
else if (dineroLuis >= 1.7 && dineroLuis < 1.8) {
    alert("Luis, compra el helado de heladovich");
    alert("Y te sobran " + (dineroLuis - 1.7));
}
else if (dineroLuis >= 1.8 && dineroLuis < 2.9) {
    alert("Luis, compra el helado de helardo");
    alert("Y te sobran " + (dineroLuis - 1.8));
}
else if (dineroLuis >= 2.9) {
    alert("Luis, compra el helado con confites o el pote de 1/4kg");
    alert("Y te sobran " + (dineroLuis - 2.9));
} else {
    alert("Lo siento Luis, no te alcanza para ningún helado");
}

