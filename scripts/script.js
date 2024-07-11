document.addEventListener('DOMContentLoaded', function() {
    const pianoLink = document.getElementById('piano-link');
    const xilofonoLink = document.getElementById('xilofono-link');
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

    if (xilofonoLink) {
        xilofonoLink.addEventListener('click', function(event) {
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
        if (event.target.classList.contains("white")) 
        {
            event.target.style.backgroundColor = "#eeeeee"
        setTimeout(() => {
            event.target.style.backgroundColor = "white"
         }, 200);
        }
        else {
            event.target.style.backgroundColor = "#323232"
        setTimeout(() => {
            event.target.style.backgroundColor = "black"
         }, 200);
        }
        }
   }

function mostrar(texto) {
    alert (texto);
}
function clickEscala(event) {
    console.log(event.name);
    console.log(event.checked);
    if (event.name == "Media") {
        updateDisplay (document.getElementById("pianoMedio"), event.checked);
    }
    if (event.name == "Aguda") {
        updateDisplay (document.getElementById("pianoAgudo"), event.checked);
    }
    if (event.name == "Grave") {
        updateDisplay (document.getElementById("pianoGrave"), event.checked);
    }
}
function updateDisplay (element,visible) {
    if (visible == true) {
        element.style.display = "inline-flex";
    }
    else if (visible == false) {
        element.style.display = "none";
    }
}