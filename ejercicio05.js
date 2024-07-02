


//  const nombre = prompt ('Escribir tu nombre', '')
//  const edad = parseInt(prompt('Escribir tu edad', ''))

// if(edad>=18){
//     console.log(`${nombre} puede conducir`)
// } else if(edad<18){
//     console.log(nombre + 'no puede conducir')
// } else { number.isNaN(edad)} 



const nombre = prompt('Escribe tu nombre', '')
const edad = parseInt(prompt('Escribe tu edad', ''))

if (Number.isNaN(edad)) {
    document.write('debes ingresar un numero')
} else if (edad >= 18) {
    document.write(`${nombre} tu que tienes ${edad} puedes conducir`)
} else {
    document.write(`${nombre} NO tienes ${edad} para poder conducir`)
}
