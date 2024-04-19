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
    const note = event.target.textContent.trim(); // Accedemos al texto a través del evento
    alert('Tecla ' + note + ' pulsada!');
}
