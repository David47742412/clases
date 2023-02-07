//POO Problema 4: 

class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            alert("Reiniciando el celular");
        } else {
            alert("El celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`Grabando video en ${this.rdc}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        Resolución de Video: <b>${this.rdc}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.rdce = rdce;
    }
    grabarVideoLento(){
        alert("Estás grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de Camara Extra: <b>${this.rdce}</b><br>`;
    }
}

celular1 = new CelularAltaGama("gris","130g","5.2'","4K","4gb","full hd");
celular2 = new CelularAltaGama("negro","142g","6'","4K","8gb","hd");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`)