class Insumo {
    constructor(nombre,tiempo){
        this.nombre = nombre;
        this.tiempo = tiempo;
    }
    info() {
        console.log(`Usted busca un ${this.nombre} que se entregará en ${this.tiempo} días.`)
    }
}

class Producto extends Insumo{
    constructor(nombre,tiempo,pago) {
    super(nombre,tiempo);
    this.pago = pago;
    }
    infoPago() {
        console.log(`Su método de pago para el producto ${this.nombre} será con ${this.pago} que se entregará en ${this.tiempo}.`)
    }
}

class Entrega extends Producto{
    constructor(nombre,tiempo,pago,TipoEntrega){
        super(nombre,tiempo,pago);
        this.TipoEntrega = TipoEntrega;
    }
    infoentrega() {
        console.log(`Su pedido de ${this.nombre} se entregará en ${this.tiempo} días. Método de pago con ${this.pago} ya confirmado. La forma de entrga será con ${this.TipoEntrega}. Muchas gracias.`)
    }
}

const entrega = new Entrega(desinfectante, 5, tarjeta, delivery);

Entrega.infoentrega();