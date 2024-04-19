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

    // Código para el enlace de la batería sigue igual...
});

function attachKeyEvents() {
    // Verificar si ya se han adjuntado eventos a las teclas
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (!key.hasAttribute('data-event-attached')) {
            key.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevenir la propagación del evento
                keyPressed(this.textContent.trim());
            });
            key.setAttribute('data-event-attached', 'true'); // Marcar la tecla como procesada
        }
    });
}

function keyPressed(note) {
    alert('Tecla ' + note + ' pulsada!');
}
