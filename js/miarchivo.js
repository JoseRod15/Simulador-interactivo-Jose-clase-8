
//funcion compra devuelve el total de la compra y muestra por consola si tiene acceso al descuento
// los productos con desuentos son el string remera,pantalon y campera
const compra = (tipoProducto, precio, cantidad) => {
    let descuento = 0.15;


    while(precio <= 0 || cantidad <= 0){
        console.log("no se agrego precio o cantidad");
        precio = prompt("vuelva a cargar precio: ");
        cantidad = prompt("vuelva a cargar la cantidad: ");
    }

    let total = precio * cantidad;


    if (cantidad > 3 && tipoProducto == "remera") {
        console.log("Tiene acceso al descuento de 15%");  
        total = precio * cantidad - ( precio * cantidad * descuento);  
    } else if (cantidad > 3 && tipoProducto == "pantalon") {
        console.log("Tiene acceso al descuento de 15%");
        total = precio * cantidad - ( precio * cantidad * descuento);   
    } else if (cantidad > 2 && tipoProducto == "campera") {
        console.log("Tiene acceso al descuento de 15%");
        total = precio * cantidad - ( precio * cantidad * descuento);    
    }else{
        console.log("No se agrego ningun descuento")
    }
    
    return total;

}

//Bienvenida de la pagina
alert("Bienvenido a Persia");
alert("productos con descuantos: \n -remera \n-pantalon \n-campera")

class cliente{
    constructor(nombre,pais){
        this.nombre = nombre;
        this.pais = pais;
    }


}

const cliente1 = new cliente(prompt("ingrese su nombre: "),prompt("ingrese su nacionalidad: "));

let clienteCompra = compra(prompt("producto a comprar: "), prompt("precio: "), prompt("cantidad: "));


let clienteArr = [cliente1.nombre,cliente1.pais,clienteCompra];
console.log(clienteArr[0] + " de " + clienteArr[1] + " a hecho una compra de : \n" + " $" + clienteCompra);










