"use strict";

/* PERSONALIZACION DESDE LA URL */

const parametros = new URLSearchParams(window.location.search);

const nombre = parametros.get("nombre") || "Invitado Especial";
const pases = parametros.get("pases") || "1";

/* CARGAR DATOS DEL INVITADO */

const nombreInvitado = document.getElementById("nombreInvitado");
const nombreInterno = document.getElementById("nombreInterno");
const pasesInvitado = document.getElementById("pasesInvitado");
const pasesInternos = document.getElementById("pasesInternos");

if (nombreInvitado) {
  nombreInvitado.textContent = nombre;
}

if (nombreInterno) {
  nombreInterno.textContent = nombre;
}

if (pasesInvitado) {
  pasesInvitado.textContent =
    pases === "1"
      ? "Hemos reservado 1 lugar para compartir esta celebración."
      : "Hemos reservado " +
        pases +
        " lugares para compartir esta celebración.";
}

if (pasesInternos) {
  pasesInternos.textContent =
    pases === "1"
      ? "Pase reservado: 1"
      : "Pases reservados: " + pases;
}

/* ABRIR LA INVITACION */

function abrirInvitacion() {
  const pantallaInicial =
    document.getElementById("pantallaInicial");

  const contenido =
    document.getElementById("contenido");

  if (pantallaInicial) {
    pantallaInicial.style.display = "none";
  }

  if (contenido) {
    contenido.style.display = "block";
    contenido.hidden = false;
  }

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });

  iniciarAnimaciones();
  intentarReproducirMusica();
}

/* CUENTA REGRESIVA */

const fechaEvento =
  new Date("2026-10-11T12:00:00-05:00").getTime();

function actualizarContador() {
  const diferencia =
    Math.max(0, fechaEvento - Date.now());

  const dias =
    Math.floor(diferencia / 86400000);

  const horas =
    Math.floor(
      (diferencia % 86400000) / 3600000
    );

  const minutos =
    Math.floor(
      (diferencia % 3600000) / 60000
    );

  const segundos =
    Math.floor(
      (diferencia % 60000) / 1000
    );

  const countdown =
    document.getElementById("countdown");

  if (countdown) {
    countdown.innerHTML =
      dias +
      " días<br>" +
      horas +
      " horas<br>" +
      minutos +
      " minutos<br>" +
      segundos +
      " segundos";
  }

  const elementoDias =
    document.getElementById("dias");

  const elementoHoras =
    document.getElementById("horas");

  const elementoMinutos =
    document.getElementById("minutos");

  const elementoSegundos =
    document.getElementById("segundos");

  if (elementoDias) {
    elementoDias.textContent = String(dias);
  }

  if (elementoHoras) {
    elementoHoras.textContent =
      String(horas).padStart(2, "0");
  }

  if (elementoMinutos) {
    elementoMinutos.textContent =
      String(minutos).padStart(2, "0");
  }

  if (elementoSegundos) {
    elementoSegundos.textContent =
      String(segundos).padStart(2, "0");
  }
}

actualizarContador();
window.setInterval(actualizarContador, 1000);

/* ANIMACIONES AL DESPLAZARSE */

let animacionesIniciadas = false;

function iniciarAnimaciones() {
  if (animacionesIniciadas) {
    return;
  }

  animacionesIniciadas = true;

  const elementos =
    document.querySelectorAll(
      ".oculto, .revelar"
    );

  if (!("IntersectionObserver" in window)) {
    elementos.forEach(function (elemento) {
      elemento.classList.add("visible");
    });

    return;
  }

  const observador =
    new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add(
              "visible"
            );
          }
        });
      },
      {
        threshold: 0.1
      }
    );

  elementos.forEach(function (elemento) {
    observador.observe(elemento);
  });
}

/* MUSICA */

function intentarReproducirMusica() {
  const musica =
    document.getElementById("musica");

  const botonMusica =
    document.getElementById("botonMusica");

  if (!musica) {
    return;
  }

  if (!musica.getAttribute("src")) {
    musica.setAttribute(
      "src",
      "vivir-mi-vida.mp3"
    );
  }

  musica
    .play()
    .then(function () {
      if (botonMusica) {
        botonMusica.hidden = false;
        botonMusica.classList.add(
          "reproduciendo"
        );
      }
    })
    .catch(function () {
      if (botonMusica) {
        botonMusica.hidden = false;
        botonMusica.classList.remove(
          "reproduciendo"
        );
      }
    });
}

const botonMusica =
  document.getElementById("botonMusica");

if (botonMusica) {
  botonMusica.addEventListener(
    "click",
    function () {
      const musica =
        document.getElementById("musica");

      if (!musica) {
        return;
      }

      if (musica.paused) {
        musica
          .play()
          .then(function () {
            botonMusica.classList.add(
              "reproduciendo"
            );
          })
          .catch(function () {
            botonMusica.classList.remove(
              "reproduciendo"
            );
          });
      } else {
        musica.pause();

        botonMusica.classList.remove(
          "reproduciendo"
        );
      }
    }
  );
}

/* HACER DISPONIBLE LA FUNCION PARA EL BOTON HTML */

window.abrirInvitacion = abrirInvitacion;
