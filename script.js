const progressBar = document.getElementById("progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const TempoAtual = document.getElementById("TempoAtual");
const TempoFinal = document.getElementById("TempoFinal");

const music = new Audio('./musics/Tame Impala - Let It Happen.mp3');
let interval;

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }
  
  function updateMusicTime() {
    const progresso = (music.currentTime / music.duration) * 100;
    progressBar.value = progresso;
    TempoAtual.textContent = formatarTempo(music.currentTime);
  }
  
  music.addEventListener('loadedmetadata', function () {
    TempoAtual.textContent = formatarTempo(music.duration);
  });
  
  function play() {
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');
    music.play();
    interval = setInterval(updateMusicTime, 1000);
  }
  
  function pause() {
    buttonPlay.classList.remove('hide');
    buttonPause.classList.add('hide');
    music.pause();
  }
  
  buttonPlay.addEventListener('click', play);
  buttonPause.addEventListener('click', pause);
  