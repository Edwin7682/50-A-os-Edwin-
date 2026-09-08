const params = new URLSearchParams(window.location.search);

const nombre =
params.get("nombre") || "Invitado Especial";

const pases =
params.get("pases") || "1";

document.getElementById("nombreInvitado").innerText =
nombre;

document.getElementById("pasesInvitado").innerText =
"Hemos reservado " + pases +
" lugar(es) para compartir esta celebración.";

function iniciarInvitacion(){

document.getElementById("inicio").style.display="none";

document.getElementById("invitacion").style.display="block";

}

const slides =
document.querySelectorAll(".slide");

let actual = 0;

function mostrarSlide(numero){

slides.forEach((slide)=>{

slide.classList.remove("activa");

});

slides[numero].classList.add("activa");

}

function siguiente(){

if(actual < slides.length-1){

actual++;

mostrarSlide(actual);

}

}

function anterior(){

if(actual > 0){

actual--;

mostrarSlide(actual);

}

}

const fechaEvento =
new Date("2026-10-11T12:00:00").getTime();

setInterval(()=>{

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
(1000*60*60));

const minutos =
Math.floor(
(diferencia%(1000*60*60))
/
(1000*60));

const segundos =
Math.floor(
(diferencia%(1000*60))
/
1000);

const contador =
document.getElementById("countdown");

if(contador){

contador.innerHTML =

dias + " días<br>" +
horas + " horas<br>" +
minutos + " minutos<br>" +
segundos + " segundos";

}

},1000);

