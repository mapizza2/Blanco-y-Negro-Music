document.addEventListener('DOMContentLoaded', function() {
    const pianoLink = document.getElementById('piano-link');
    const bateriaLink = document.getElementById('bateria-link');
    const content = document.getElementById('content');

    if (pianoLink) {
        pianoLink.addEventListener('click', function(event) {
            event.preventDefault();
            fetch('instruments/piano.html') // Ruta actualizada para el archivo HTML del piano
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    if (!document.getElementById('piano-style')) {
                        var head = document.head;
                        var link = document.createElement('link');
                        link.id = 'piano-style';
                        link.rel = 'stylesheet';
                        link.type = 'text/css';
                        link.href = 'styles/piano.css'; // Ruta actualizada para el archivo CSS del piano
                        link.media = 'all';
                        head.appendChild(link);
                    }
                    attachKeyEvents();
                });
        });
    }

    // Código para el enlace de la batería sigue igual...
});

function attachKeyEvents() {
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', function() {
            keyPressed(this.textContent.trim());
        });
    });
}

function keyPressed(note) {
    alert('Tecla ' + note + ' pulsada!');
}
