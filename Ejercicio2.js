let precios = [2000,3000,5000];

let subtotal = suma(precios);
let base = 0; 
(subtotal > 200000)? base = subtotal - ((subtotal * 20) / 100) : base = subtotal - ((subtotal * 10) / 100);

let iva = subtotal - (subtotal * 0.19);
let envio = 0; 

let total = base + iva + envio
console.log(parseInt(total)) //Al menos que se entregue entero

function suma(ArrayPrecios){
    let sumaTotal = 0;
    for (const element of ArrayPrecios) {
        sumaTotal += element;
    }
    return sumaTotal;
}
