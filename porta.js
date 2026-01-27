// funcion del panel de musica
function abrirMenu(){
    let panel = document.querySelector('.panel');
    let panelOcu = document.querySelector('.ocultar-panel');
    panel.style.display = 'block';
    panelOcu.style.display = 'block';
}
function cerrarMenu(){
    let panel = document.querySelector('.panel');
    let panelOcu = document.querySelector('.ocultar-panel');
    panel.style.display = 'none';
    panelOcu.style.display = 'none';
}
function cambiarCancion(nuevaCancion){
    let audio = document.getElementById('audio');
    audio.src = nuevaCancion;
    audio.play();
}

// Funciones de imagenes de configuraciones
function mostrarImg(){
    let img = document.getElementById('mImg')
    img.style.display = 'block'
}

function mostrarImg2(){
    let img2 = document.getElementById('mImg2')
    img2.style.display = 'block'
}

function mostrarImg3(){
    let img3 = document.getElementById('mImg3')
    img3.style.display = 'block'
}

// Funcion de proyecto
function mostrarIp(){
    let proyecto = document.getElementById('Ip')
    proyecto.style.display = 'flex'
}

// window unico mejor manejo
window.onclick = function(e){
    let img = document.getElementById('mImg')
    if(e.target == img){
        img.style.display = 'none'
    }
    
    let img2 = document.getElementById('mImg2')
    if(e.target == img2){
        img2.style.display = 'none'
    }
    
    let img3 = document.getElementById('mImg3')
    if(e.target == img3){
        img3.style.display = 'none'
    }
    
    let proyecto = document.getElementById('Ip')
    if(e.target == proyecto){
        proyecto.style.display = 'none'
    }
}
// Funcion de audio
function toggleAudio() {
    let audio = document.getElementById("audio");
    let btn = document.getElementById("audio-control");

    if (audio.paused) {
    audio.play();
    btn.innerHTML = "🔊";
} else {
    audio.pause();
    btn.innerHTML = "▶️";
}
}

// Funcion de cargar en el titulo
const nombre = "Cheft_dev 💻💪🏻";
const prefijo = "@"
let i = 0;
function animarTitulo() {
    document.title = prefijo + " " + nombre.substring(0, i);

    if (i < nombre.length) {
        i++;
        setTimeout(animarTitulo, 300);
    } else {
        setTimeout(() => {
            i = 0;
            animarTitulo();
        }, 2000);
    }
}

animarTitulo();