// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;  

function obtenerDato(e) {
    e.preventDefault();
    const Numero = document.querySelector("#Numero");
    console.log('Valor del input:', Numero.value);
    const numeroValue = parseInt(Numero.value.trim()); 
   
    if (isNaN(numeroValue) || numeroValue < 1 || numeroValue > 100) {
        alert('Ingrese un valor entre 1 y 100');
    } else {
       
        if (numeroValue < numeroAleatorio) {
            alert('El número es mayor');
        } else if (numeroValue > numeroAleatorio) {
            alert('El número es menor');
        } else {
            alert('¡Felicidades, acertaste el número!');
        }
    }
}

const Formulario = document.querySelector("#Formulario");
console.log(Formulario)
Formulario.addEventListener('submit', obtenerDato);

console.log('Número aleatorio:', numeroAleatorio);