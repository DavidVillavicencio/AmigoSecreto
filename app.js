//Variables
let listaNombresAmigos = [];
let numeroAleatorio = 0;
let amigoSorteado = '';

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    //Si el campo está vacío envia una alerta
    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return;
    }
    // Validar si el nombre ya está en la lista (sin distinguir mayúsculas/minúsculas)
    let yaExiste = listaNombresAmigos.some(nombre => nombre.toLowerCase() === nombreAmigo.toLowerCase());
    if (yaExiste) {
        alert('Este nombre ya está en la lista');
        return;
    }
    // Validar que el nombre contenga solo letras y espacios (incluyendo letras con acentos)
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo)) {
    alert('El nombre debe contener solo letras');
    return;
    }
    //Limpia la caja
    limpiarCaja();
    //agrega el nombre a la lista
    listaNombresAmigos.push(nombreAmigo);
    //muestra la lista
    mostrarLista();
    //limpia el resultado
    document.getElementById('resultado').innerHTML = "";
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() { 
    //Si la lista de amigos tiene menos de 2 amigos envia una alerta
    if (listaNombresAmigos.length < 2) {
    alert('Debes ingresar al menos dos amigos para sortear');
    return;
    }   
    //Si la lista de amigos está vacía envia una alerta
    if (listaNombresAmigos.length === 0) {
        alert('Debes ingresar al menos un amigo');
    }
    //Si hay un solo amigo, ejecuta un random para seleccionar el amigo 
    else {
        numeroAleatorio = Math.floor(Math.random()*listaNombresAmigos.length);
        amigoSorteado = listaNombresAmigos[numeroAleatorio];
        alert('El amigo que salio sorteado es: ' + amigoSorteado.toUpperCase());
        //limpia la lista
        document.getElementById('listaAmigos').innerHTML = "";
         // Limpiar la lista de amigos
        listaNombresAmigos = [];
        //Y muestra el resultado
        mostrarResultado();
    }
    return;
}

// Función para mostrar la lista
function mostrarLista() {  
    let lista = '';
    //recorrer la lista con un for y añadir el nombre al index
    for (let i = 0; i < listaNombresAmigos.length; i++) {
        lista += '<li>'+listaNombresAmigos[i]+'</li>';
    }
    document.getElementById('listaAmigos').innerHTML = lista;
    return;
}

// Función para mostrar el resultado
function mostrarResultado() {
    document.getElementById('resultado').innerHTML = "El Amigo Secreto Sorteado es: " + amigoSorteado.toUpperCase();
    return;
}