// cola.js
class Cola {
    constructor() {
        this.elementos = [];
    }

    
    agregar(numero) {
        this.elementos.push(numero);
        console.log(`Número ${numero} agregado a la cola.`);
    }

   
    eliminar() {
        if (this.elementos.length === 0) {
            console.log("La cola está vacía.");
            return null;
        }
        const eliminado = this.elementos.shift();
        console.log(`Número ${eliminado} eliminado de la cola.`);
        return eliminado;
    }

    mostrar() {
        console.log("Estado actual de la cola:", this.elementos);
    }
}


const miCola = new Cola();
miCola.agregar(10);
miCola.agregar(20);
miCola.eliminar();
miCola.mostrar();
