const numeros = [345, 666, 200, 97, 21]

let mayor = 0 

for (let i = 0; i < numeros.length; i ++){
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(`el numero mayor de los siguientes numeros ${numeros} es ${mayor}`)