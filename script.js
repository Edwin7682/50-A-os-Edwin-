// PARAMETROS DE LA URL

const params = new URLSearchParams(window.location.search);

const nombre =
params.get("nombre") || "Invitado Especial";

const pases =
params.get("pases") || "1";

// CARGAR DATOS DEL INVITADO

document.getElementById("nombreInvitado").innerText =
nombre;

document.getElementById("nombreInterno").innerText =
nombre;

document.getElementById("pasesInvitado").innerText =
"Hemos reservado " +
pases +
" lugar(es) para compartir esta celebración.";

document.getElementById("pasesInternos").innerText =
"Pases reservados: " + pases;


// ABRIR INVITACION

function abrirInvitacion(){

document.getElementById("pantallaInicial").style.display = "none";

document.getElementById("contenido").style.display = "block";

window.scrollTo(0,0);

}


// CUENTA REGRESIVA

const fechaEvento =
new Date("2026-10-11T12:00:00").getTime();

setInterval(function(){

const ahora =
new Date().getTime();

const diferencia =
fechaEvento - ahora;

const dias =
Math.floor(diferencia/(1000*60*60*24));

const horas =
Math.floor(
(diferencia%(1000*60*60*24))
/
(1000*60*60)
);

const minutos =
Math.floor(
(diferencia%(1000*60*60))
/
(1000*60)
);

const segundos =
Math.floor(
(diferencia%(1000*60))
/
1000
);

document.getElementById("countdown").innerHTML =

dias + " días<br>" +
horas + " horas<br>" +
minutos + " minutos<br>" +
segundos + " segundos";

},1000);


// ANIMACION AL HACER SCROLL

const observador =
new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.classList.add("visible");

}

});

});

document
.querySelectorAll(".oculto")
.forEach((elemento)=>{

observador.observe(elemento);

});
