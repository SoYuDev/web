const video = document.getElementById("video");
const playBot = document.getElementById("play");
const pauseBot = document.getElementById("pause");
const muteBot = document.getElementById("mute");
const bot1 = document.getElementById("1");
const bot2 = document.getElementById("2");
const bot3 = document.getElementById("3");
const bot4 = document.getElementById("4");

// Reproducir el video sin expresión lambda
playBot.addEventListener("click", function () {
    reproducirVideo();
});

// Pausar el video con función de flecha o callback (Vacía y se llama asi misma)
pauseBot.addEventListener("click", () => {
    video.pause();
});

// Silenciar o activar el sonido del video
muteBot.addEventListener("click", () => {
    video.muted = !video.muted; // Alternar entre silenciar y activar sonido
});

// --------------------------------------------------------------------//

// Cambio de videos
bot1.addEventListener("click", () => {
    video.src = "media/pelicula.mp4";

    reproducirVideo();
});

bot2.addEventListener("click", () => {
    video.src = "media/pelicula.webm";

    reproducirVideo();
});

function reproducirVideo() {
    video.muted = false; // Activa el sonido
    video.volume = 0.5; // Establece el volumen al la mitad
    video.play(); // Reproduce el video
}
