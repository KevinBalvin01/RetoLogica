let arregloPrecios = [18, 22 ,20,200]; /*arreglo de ENTEROS*/
let ArrayFinal = [];
if(arregloPrecios.length <= 3){
    ArrayFinal = ordenarMayorAMenor(arregloPrecios)
}else{
    ArrayFinal = ordenarMayorAMenor(arregloPrecios);
    ArrayFinal = tomarTresMayores(ArrayFinal);
}

console.log(ArrayFinal);

function ordenarMayorAMenor(arreglo){

    let arregloTemporal = [];
    for (let i = 0; i < arreglo.length; i++) {
        let mayor = arreglo[0];
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[j] > mayor && !arregloTemporal.includes(arreglo[j])) {
                mayor = arreglo[j];
            }
        }
        arregloTemporal.push(mayor);
    }
    return arregloTemporal;
}

function tomarTresMayores(Array){
    let ArrayHighest = [];
    for (let i = 0; i < 3; i++) {
        ArrayHighest.push(Array[i])
    }
    return ArrayHighest; 
}
