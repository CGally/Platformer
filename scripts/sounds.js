var swooshSound = new buzz.sound("/sounds/swoosh.mp3", { volume: 70 }),
    boingSound = new buzz.sound("/sounds/boing.mp3", { volume: 70 }),
    powerUpSound = new buzz.sound("/sounds/powerup.wav", { volume: 23 }),
    worldOneSound = new buzz.sound("/sounds/desert.mp3", { volume: 35 }),
    worldTwoSound = new buzz.sound("/sounds/winter.mp3", { volume: 35 }),
    worldThreeSound = new buzz.sound("/sounds/sky.mp3", { volume: 35 }),
    winnerSound = new buzz.sound("/sounds/FFI.mp3", { volume: 35 }),
    currentVolume = 70;

function setVolume(percent) {
  if(percent > 0) {
    currentVolume = percent;
  }
  swooshSound.setVolume(percent);
  boingSound.setVolume(percent);
  powerUpSound.setVolume(percent / 3);
  worldOneSound.setVolume(percent / 2);
  worldTwoSound.setVolume(percent / 2);
  worldThreeSound.setVolume(percent / 2);
  winnerSound.setVolume(percent / 2);
};

function stop() {
  winnerSound.stop();
  worldOneSound.stop();
  worldTwoSound.stop();
  worldThreeSound.stop();
};

volume.addEventListener('input', function(event) {
  setVolume(event.target.value);
  if(event.target.value < 1) {
    mute.style.display = 'inline-block';
    vol.style.display = 'none';
  } else {
    mute.style.display = 'none';
    vol.style.display = 'inline-block';
  }
});

vol.addEventListener('click', function(event) {
  setVolume(0);
  mute.style.display = 'inline-block';
  vol.style.display = 'none';
});

mute.addEventListener('click', function(event) {
  setVolume(currentVolume);
  mute.style.display = 'none';
  vol.style.display = 'inline-block';
});
