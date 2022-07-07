
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


let cliente = compra(prompt("tipo de prodcto: "), prompt("precio: "), prompt("cantidad: "));
console.log("Total compra: " + "$" + cliente);





