var audio = new Audio();
// GANTI LAGU
audio.src = "sound/sound.mp3";
// LOOP
audio.loop = true;

function initAudioPlayer() {
  var playbtn = document.getElementById("playpausebtn");

  playbtn.addEventListener("click", playPause);

  function playPause() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}
window.addEventListener("load", initAudioPlayer);
