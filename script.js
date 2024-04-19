document.addEventListener('DOMContentLoaded', function() {
    const pianoLink = document.getElementById('piano-link');
    const bateriaLink = document.getElementById('bateria-link');
    const content = document.getElementById('content');

    pianoLink.addEventListener('click', function() {
        fetch('../instruments/piano.html')
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                // Agrega la hoja de estilo del piano
                if (!document.getElementById('piano-style')) {
                    var head = document.head;
                    var link = document.createElement('link');
                    link.id = 'piano-style';
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'piano.css';
                    link.media = 'all';
                    head.appendChild(link);
                }
            });
    });

    bateriaLink.addEventListener('click', function() {
        content.innerHTML = '<p>Mostrando información sobre la Batería.</p>';
    });
});

function keyPressed(note) {
    alert('Tecla ' + note + ' pulsada!');
}
