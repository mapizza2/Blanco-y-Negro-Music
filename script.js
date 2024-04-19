document.addEventListener('DOMContentLoaded', function() {

function showPiano() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="piano">
            <div class="key white" onclick="keyPressed('Do')"></div>
            <div class="key black" onclick="keyPressed('Do#')"></div>
            <div class="key white" onclick="keyPressed('Re')"></div>
            <div class="key black" onclick="keyPressed('Re#')"></div>
            <div class="key white" onclick="keyPressed('Mi')"></div>
            <div class="key white" onclick="keyPressed('Fa')"></div>
            <div class="key black" onclick="keyPressed('Fa#')"></div>
            <div class="key white" onclick="keyPressed('Sol')"></div>
            <div class="key black" onclick="keyPressed('Sol#')"></div>
            <div class="key white" onclick="keyPressed('La')"></div>
            <div class="key black" onclick="keyPressed('La#')"></div>
            <div class="key white" onclick="keyPressed('Si')"></div>
        </div>
    `;
}

function keyPressed(note) {
    alert('Tecla ' + note + ' pulsada!');
}
