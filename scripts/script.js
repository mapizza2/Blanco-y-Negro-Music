let grabacion = []
let recordingStartTime; 

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
            fetch('instruments/xilofono.html')
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    if (!document.getElementById('xilofono-style')) {
                        var head = document.head;
                        var link = document.createElement('link');
                        link.id = 'xilofono-style';
                        link.rel = 'stylesheet';
                        link.type = 'text/css';
                        link.href = 'styles/xilofono.css';
                        link.media = 'all';
                        head.appendChild(link);
                    }
                    attachKeyEventsXilofono(); // Asegurémonos de adjuntar eventos después de cargar el piano
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

function attachKeyEventsXilofono() {
    // Eliminar cualquier evento mousedown previamente adjuntado
    const keys = document.querySelectorAll('.xilo');
    keys.forEach(key => {
        key.removeEventListener('mousedown', keyPressedXilofono);
        key.addEventListener('mousedown', keyPressedXilofono);
    });
}

function keyPressed(event) {
    console.log(event);
    if (event != undefined) {
        const note = event.target.dataset.keyname; // Accedemos al texto a través del evento
        //alert('Tecla ' + note + ' pulsada!');
        document.getElementById(note).play();
        if (document.getElementById("grabar").innerHTML=="Grabando") {
            noteTime= {note:note, time:Date.now()-recordingStartTime}
            grabacion.push(noteTime);
               }
        
        if (event.target.classList.contains("white")) 
        {
            event.target.style.backgroundColor = "#c9c9c9"
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

   function keyPressedXilofono(event){
    console.log("event:",event);
    if (event != undefined) {
        const note = event.target.dataset.keyname; // Accedemos al texto a través del evento
        //alert('Tecla ' + note + ' pulsada!');
        document.getElementById(note).play();
        if (document.getElementById("grabar").innerHTML=="Grabando") {
            noteTime= {note:note, time:Date.now()-recordingStartTime}
            grabacion.push(noteTime);
               }
        
        if (event.target.classList.contains("xdo")) 
        {
            event.target.style.backgroundColor = "darkred"
        setTimeout(() => {
            event.target.style.backgroundColor = "red"
         }, 200);
        }
        
        else if (event.target.classList.contains("xre"))
        {
            event.target.style.backgroundColor = "lightyellow"
        setTimeout(() => {
            event.target.style.backgroundColor = "yellow"
         }, 200);
        }
        
        else if (event.target.classList.contains("xmi"))
        {
            event.target.style.backgroundColor = "#fa9064"
        setTimeout(() => {
            event.target.style.backgroundColor = "orange"
         }, 200);
            }
            
        else if (event.target.classList.contains("xfa"))
            {
                event.target.style.backgroundColor = "#ac0afc"
            setTimeout(() => {
                event.target.style.backgroundColor = "purple"
             }, 200);
                }
                
        else if (event.target.classList.contains("xsol"))
            {
                event.target.style.backgroundColor = "#c6ebf7"
            setTimeout(() => {
                event.target.style.backgroundColor = "lightblue"
             }, 200);
                }
            
        else if (event.target.classList.contains("xla"))
            {
                event.target.style.backgroundColor = "lightgreen"
            setTimeout(() => {
                event.target.style.backgroundColor = "green"
             }, 200);
                }
                
        else if (event.target.classList.contains("xsi"))
            {
                event.target.style.backgroundColor = "lightpink"
            setTimeout(() => {
                event.target.style.backgroundColor = "pink"
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
function playArray (song) {
    for (let i = 0; i < song.length; i++) {
        setTimeout(() => {
            if (song[i]!=" ") {
                document.querySelector('[data-keyname="' + song[i]+'"]').dispatchEvent(new MouseEvent('mousedown'));
                document.querySelector('[data-keyname="' + song[i]+'"]').dispatchEvent(new MouseEvent('mouseup'));
            }
        }, i*600);
    }    
}
function estrellita (notas) {
    const twinkleTwinkle = ["tonta", "DO4", "DO4", "SOL4","SOL4","LA4","LA4", "SOL4", " ", "FA4", "FA4", "MI4", "MI4", "RE4", "RE4", "DO4", " ",
                            "SOL4", "SOL4", "FA4", "FA4", "MI4", "MI4", "RE4", " ", "SOL4", "SOL4", "FA4", "FA4", "MI4", "MI4", "RE4", " ",
                            "DO4", "DO4", "SOL4","SOL4","LA4","LA4", "SOL4", " ", "FA4", "FA4", "MI4", "MI4", "RE4", "RE4", "DO4"];
    playArray(twinkleTwinkle)
}

function pollitos (notas){
    const pollitos = ["tonta", "DO4", "RE4", "MI4", "FA4", "SOL4", " ", "SOL4", " ", "LA4", "LA4", "LA4", "LA4", "SOL4", " ", 
        "SOL4", " ", "FA4", "FA4", "FA4", "FA4", "MI4", " ", "MI4", " ", "RE4", "RE4", 
        "RE4", "RE4", "DO4", " ", "DO4", " ", " ", "DO4", "RE4", "MI4", "FA4", "SOL4", " ", "SOL4", " ", "LA4", "LA4", "LA4", "LA4", "SOL4", " ", 
        "SOL4", " ", "FA4", "FA4", "FA4", "FA4", "MI4", " ", "MI4", " ", "RE4", "RE4", 
        "RE4", "RE4", "DO4", " ", "DO4"];
    playArray(pollitos)
}

function feliz (notas){
    const feliz = ["tonta", "SOL4", "SOL4","LA4", "SOL4", "DO5", "SI4", " ", "SOL4", "SOL4", "LA4",
        "SOL4", "RE5", "DO5", " ", "SOL4", "SOL4", "SOL5", "MI5", "DO5", "SI4",
        "LA4", " ", "FA5","FA5","MI5", "DO5", "RE5", "DO5"];
    playArray(feliz)
}
function grabar (){
    if (document.getElementById("grabar").innerHTML=="Grabar") {
        document.getElementById("grabar").innerHTML="Grabando"
        noteTime= {note:"tonta", time:0}
        grabacion=[noteTime]
        recordingStartTime = Date.now();
        document.getElementById("grabar").classList.add("buttonRed")
    }
    else if (document.getElementById("grabar").innerHTML=="Grabando") {
        document.getElementById("grabar").innerHTML="Grabar"
        document.getElementById("grabar").classList.remove("buttonRed")
    }
    
}

function reproducir(){
    playArrayTime(grabacion)
}
function playArrayTime (song) {
    for (let i = 0; i < song.length; i++) {
        setTimeout(() => {
            if (song[i].note!=" ") {
                document.querySelector('[data-keyname="' + song[i].note+'"]').dispatchEvent(new MouseEvent('mousedown'));
                document.querySelector('[data-keyname="' + song[i].note+'"]').dispatchEvent(new MouseEvent('mouseup'));
            }
        }, song[i].time);
    }    
}