let numeroSecreto =0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento () {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
   if (numeroDeUsuario===numeroSecreto){
    asignarTextoElemento ('p', `acertaste el numero secreto en ${intentos} ${(intentos=== 1)? 'vez' : 'veces'}`);
    document.getElementById ('reiniciar').removeAttribute('disabled');
// el usuario no acerto
   } else{
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p', 'el numero secreto es menor');
    } else {
        asignarTextoElemento ('p', 'el numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;

}

function limpiarCaja (){
    let valorCaja = document.querySelector ('#valorUsuario');
    valorCaja.value = '';
    //tambien se puede hacer de la siguiente manera este codigo
    //document.querySelector ('#valorUsuario').value = '';
}
function condicionesIniciales (){
    asignarTextoElemento ('h1', 'juego del numero secreto!');
    asignarTextoElemento ('p', `indica un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    //deshabilitar el boton de nuevo juego
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector ('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    //si ya esta sorteamos todos los numeros
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'ya se asignaron todos los numeros posibles');
    }else {
        //si el numero generado esta incluido en la lista   
            if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
          }else{
            listaDeNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }
    }
     
}
condicionesIniciales();