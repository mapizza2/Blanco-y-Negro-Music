document.addEventListener('DOMContentLoaded', function() {
    // Asegúrate de que los ID son correctos y coinciden con los del HTML
    const pianoLink = document.getElementById('piano-link');
    const bateriaLink = document.getElementById('bateria-link');
    const content = document.getElementById('content');

    // Verifica si los elementos existen antes de añadir listeners
    pianoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la navegación, importante si usas '#'
        fetch('instruments/piano.html')
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                // Agrega la hoja de estilo del piano solo si no existe
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
                // Asegúrate de que los eventos de teclas se asignen correctamente después de cargar el HTML
                attachKeyEvents();
            });
    });

    if (bateriaLink) {
        bateriaLink.addEventListener('click', function(event) {
            event.preventDefault();
            content.innerHTML = '<p>Mostrando información sobre la Batería.</p>';
        });
    }
});

function attachKeyEvents() {
    // Asigna eventos a las teclas del piano
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', function() {
            keyPressed(this.textContent.trim()); // Mejor manejo del texto de la tecla
        });
    });
}

function keyPressed(note) {
    alert('Tecla ' + note + ' pulsada!');
}
