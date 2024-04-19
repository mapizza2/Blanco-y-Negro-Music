document.addEventListener('DOMContentLoaded', function() {
    function showPiano() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <div class="piano">
                <div class="key white" onclick="keyPressed('Do')">Do</div>
                <div class="key black" onclick="keyPressed('Do#')">Do#</div>
                <div class="key white" onclick="keyPressed('Re')">Re</div>
                <div class="key black" onclick="keyPressed('Re#')">Re#</div>
                <div class="key white" onclick="keyPressed('Mi')">Mi</div>
                <div class="key white" onclick="keyPressed('Fa')">Fa</div>
                <div class="key black" onclick="keyPressed('Fa#')">Fa#</div>
                <div class="key white" onclick="keyPressed('Sol')">Sol</div>
                <div class="key black" onclick="keyPressed('Sol#')">Sol#</div>
                <div class="key white" onclick="keyPressed('La')">La</div>
                <div class="key black" onclick="keyPressed('La#')">La#</div>
                <div class="key white" onclick="keyPressed('Si')">Si</div>
            </div>
        `;
    }

    function keyPressed(note) {
        alert('Tecla ' + note + ' pulsada!');
    }

    window.showPiano = showPiano; // Hacer la función accesible globalmente
});
