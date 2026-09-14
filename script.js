"use strict";


/* DATOS PERSONALIZADOS DE LA URL */

const parametros =
  new URLSearchParams(
    window.location.search
  );

const nombre =
  (
    parametros.get("nombre") ||
    "Invitado especial"
  ).trim();

const pases =
  Math.max(
    1,
    Number.parseInt(
      parametros.get("pases"),
      10
    ) || 1
  );


/* ELEMENTOS PRINCIPALES */

const pantallaInicial =
  docum*nt.getElementById(
    "pantallaIn*cial"
  );

const contenido =
  do*ument.getElementById(
    "conteni*o"
  );

const botonAbrir =
  document.getElementById(
    "botonAbrir"
  );

const nombreInvitado =
  document.getElementById(
    "nombreInvitado"
  );

const nombreInterno =
  document.getElementById(
    "nombreInterno"
  );

const pasesInvitado =
  document.getElementById(
    "pasesInvitado"
  );

const pasesInternos =
  document.getElementById(
    "pasesInternos"
  );

const musica =
  document.getElementById(
    "musica"
  );

const botonMusica =
  document.getElementById(
    "botonMusica"
  );


/* PERSONALIZACIÓN */

nombreInvitado.textContent =
  nombre;

nombreInterno.textContent =
  nombre;

if (pases === 1) {

  pasesInvitado.textContent =
    "Hemos reservado 1 lugar para compartir esta celebración.";

  pasesInternos.textContent =
    "Pase reservado: 1";

} else {

  pasesInvitado.textContent =
    "Hemos reservado " +
    pases +
    " lugares para compartir esta celebración.";

  pasesInternos.textContent =
    "Pases reservados: " +
    pases;

}


/* ABRIR INVITACIÓN */

botonAbrir.addEventListener(
  "click",
  function () {

    pantallaInicial.style.display =
      "none";

    contenido.hidden =
      false;

    botonMusica.hidden =
      false;

    window.scrollTo(
      {
        top: 0,
        behavior: "instant"
      }
    );

    musica.play()
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

  }
);


/* CONTROL DE MÚSICA */

botonMusica.addEventListener(
  "click",
  function () {

    if (musica.paused) {

      musica.play()
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


/* CUENTA REGRESIVA */

const fechaEvento =
  new Date(*    "2026-10-11T12:00:00-05:00"
  *.getTime();

const elementoDias =
* document.getElementById("dias");
*const elementoHoras =
  document.g*tElementById("horas");

const elem*ntoMinutos =
  document.getElement*yId("minutos");

const elementoSeg*ndos =
  document.getElementById("*egundos");

function actualizarCon*ador() {

  const diferencia =
   *Math.max(
      0,
      fechaEven*o - Date.now()
    );

  const dia* =
    Math.floor(
      diferenci* / 86400000
    );

  const horas *
    Math.floor(
      (
        d*ferencia %
        86400000
      * /
      3600000
    );

  const m*nutos =
    Math.floor(
      (
  *     diferencia %
        3600000
*     ) /
      60000
    );

  const segundos =
    Math.floor(
      (
        diferencia %
        60000
      ) /
      1000
    );

  elementoDias.textContent =
    String(dias);

  elementoHoras.textContent =
    String(horas).padStart(
      2,
      "0"
    );

  elementoMinutos.textContent =
    String(minutos).padStart(
      2,
      "0"
    );

  elementoSegundos.textContent =
    String(segundos).padStart(
      2,
      "0"
    );

}

actualizarContador();

window.setInterval(
  actualizarContador,
  1000
);


/* ANIMACIONES AL HACER SCROLL */

const elementosRevelar =
  docu*ent.querySelectorAll(
    ".revela*"
  );

const observador =
  new I*tersectionObserver(

    function *entradas) {

      entradas.forEac*(
        function (entrada) {

  *       if (
            entrada.is*ntersecting
          ) {

       *    entrada.target.classList.add(
*             "visible"
           *);

          }

        }
      )*

    },

    {
      threshold: 0*15
    }

  );

elementosRevelar.f*rEach(
  function (elemento) {

  * observador.observe(
      element*
    );

  }
);
