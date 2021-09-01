//Class

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;

    }

    formatearProducto() {
        return `El producto ${this.nombre}, tiene un precio de ${this.precio}`
    }

    precioProducto() {
        return `El precio es ${this.precio}`
    }


}


const producto2 = new Producto('Monitor', 400);

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
}



const libro = new Libro('JS la Revolucion', 120, '1234567');




console.log(libro.formatearProducto());
console.log(producto2);