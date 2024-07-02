const nombre = prompt('ingrese su nombre','')
const metros = parseInt(prompt('ingrese una distancia', ''))

if (metros > 0 && metros <=1000){
alert(`${nombre} por la cant de metros te recomiendo ir a pie`)
} else if (metros > 1000 && metros <= 30000){
    alert(`${nombre} por la cantidad de metros te recomiendo ir en colectivo`)
} else if (metros > 30000 && metros <=100000){
    alert(`${nombre} por la cantidad de metros te recomiendo ir en auto`)
} else if (metros > 100000) {
    (`${nombre} por la cantidad de metros te recomiendo ir en avion`)
}
