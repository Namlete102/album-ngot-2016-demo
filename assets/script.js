document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audioPlayer');
  const mainPlayBtn = document.getElementById('mainPlayBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const playIcon = mainPlayBtn.querySelector('i');
  const trackItems = document.querySelectorAll('.track-item');
  
  const progressBar = document.getElementById('progressBar');
  const currentTimeTxt = document.getElementById('currentTime');
  const durationTxt = document.getElementById('duration');

  let activeTrack = document.querySelector('.track-item.active');
  if (activeTrack && activeTrack.dataset.src) {
    audio.src = activeTrack.dataset.src;
    audio.load();
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updatePlayIcon(isPlaying) {
    playIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    playIcon.style.marginLeft = isPlaying ? '0px' : '3px';
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play().then(() => updatePlayIcon(true)).catch(() => {});
    } else {
      audio.pause();
      updatePlayIcon(false);
    }
  }

  // --- LOGIC CHUYỂN BÀI LÙI / TIẾN ---
  function playNextTrack() {
    const trackArray = Array.from(trackItems);
    const currentIndex = trackArray.findIndex(item => item.classList.contains('active'));
    
    let nextIndex = currentIndex + 1;
    if (nextIndex >= trackArray.length) {
      nextIndex = 0; // Vòng lại bài đầu tiên
    }
    trackArray[nextIndex].click();
  }

  function playPrevTrack() {
    // Nếu bài nhạc đang chạy quá 3 giây -> Bấm Lùi sẽ phát lại từ đầu bài đó
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }

    const trackArray = Array.from(trackItems);
    const currentIndex = trackArray.findIndex(item => item.classList.contains('active'));
    
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = trackArray.length - 1; // Vòng xuống bài cuối cùng
    }
    trackArray[prevIndex].click();
  }

  // Gán sự kiện click cho các nút
  mainPlayBtn.addEventListener('click', togglePlay);
  nextBtn.addEventListener('click', playNextTrack);
  prevBtn.addEventListener('click', playPrevTrack);

  audio.addEventListener('loadedmetadata', () => {
    durationTxt.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration)) {
      progressBar.value = audio.currentTime;
      currentTimeTxt.textContent = formatTime(audio.currentTime);
    }
  });

  progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
    currentTimeTxt.textContent = formatTime(progressBar.value);
  });

  // Tự động chuyển bài khi hết nhạc
  audio.addEventListener('ended', playNextTrack);

  // Click trực tiếp bài hát trong danh sách
  trackItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        togglePlay();
        return;
      }

      const currentActive = document.querySelector('.track-item.active');
      if (currentActive) currentActive.classList.remove('active');

      item.classList.add('active');

      const newSrc = item.dataset.src;
      if (newSrc) {
        audio.src = newSrc;
        audio.load();
        audio.play().then(() => updatePlayIcon(true)).catch(() => {});
      }
    });
  });
});