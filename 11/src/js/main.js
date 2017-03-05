const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  // woohoo
  video[method]();
}

function toggleButton() {
  toggle.innerHTML = video.paused ? '&#9658;' : 'II';
}

function skip() {
  const time = this.dataset.skip;
  video.currentTime += parseFloat(time);
}

function handleSliders() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const time = video.duration * (e.offsetX / progress.offsetWidth);
  video.currentTime = parseFloat(time);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click', skip));
ranges.forEach((range) => {
  // should be better than change + mousemove
  range.addEventListener('input', handleSliders);
});

let mousedown = false;
progress.addEventListener('click', scrub);
// woohoo
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => { mousedown = true; });
progress.addEventListener('mouseup', () => { mousedown = false; });
