document.addEventListener('DOMContentLoaded', function() {
    const pianoLink = document.getElementById('piano-link');
    const bateriaLink = document.getElementById('bateria-link');
    const content = document.getElementById('content');

    if (pianoLink) {
        pianoLink.addEventListener('click', function(event) {
            event.preventDefault();
            fetch('instruments/piano.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    if (!document.getElementById('piano-style')) {
                        var head = document.head;
                        var link = document.createElement('link');
                        link.id = 'piano-style';
                        link.rel = 'stylesheet';
                        link.type = 'text/css';
                        link.href = 'styles/piano.css';
                        link.media = 'all';
                        head.appendChild(link);
                    }
                    attachKeyEvents(); // Asegurémonos de adjuntar eventos después de cargar el piano
                });
        });
    }

    if (bateriaLink) {
        bateriaLink.addEventListener('click', function(event) {
            event.preventDefault();
            fetch('instruments/bateria.html')
        });
    }
    // Código para el enlace de la batería sigue igual...
});

function attachKeyEvents() {
    // Eliminar cualquier evento mousedown previamente adjuntado
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.removeEventListener('mousedown', keyPressed);
        key.addEventListener('mousedown', keyPressed);
    });
}

function keyPressed(event) {
    console.log(event);
    if (event != undefined) {
        const note = event.target.dataset.keyname; // Accedemos al texto a través del evento
        //alert('Tecla ' + note + ' pulsada!');
        document.getElementById(note).play();
        console.log("plating");
    }

   }

function mostrar(texto) {
    alert (texto);
}
function clickEscala(event) {
    console.log(event.name);
    console.log(event.checked);
    if (event.name == "Media") {
        if (event.checked == true) {
            document.getElementById("pianoMedio").style.display = "inline-flex";
        }
        else if (event.checked == false) {
            document.getElementById("pianoMedio").style.display = "none";
        }
    }
    if (event.name == "Aguda") {
        if (event.checked == true) {
            document.getElementById("pianoAgudo").style.display = "inline-flex";
        }
        else if (event.checked == false) {
            document.getElementById("pianoAgudo").style.display = "none";
        }
    }
    if (event.name == "Grave") {
        if (event.checked == true) {
            document.getElementById("pianoGrave").style.display = "inline-flex";
        }
        else if (event.checked == false) {
            document.getElementById("pianoGrave").style.display = "none";
        }
    }
}