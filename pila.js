// pila.js
class Pila {
    constructor() {
        this.elementos = [];
    }

    
    push(obj) {
        this.elementos.push(obj);
        console.log("Objeto agregado:", obj);
    }

    
    pop() {
        if (this.elementos.length === 0) return "La pila está vacía";
        return this.elementos.pop();
    }

    mostrarPila() {
        console.log(this.elementos);
    }
}


const miPila = new Pila();
miPila.push({ Nombre: "Orlando", Edad: 30 });
miPila.push({ Nombre: "Maria", Edad: 25 });

miPila.mostrarPila();
