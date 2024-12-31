let noClickCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const bgMusic = document.getElementById('bgMusic');

// Initial button sizes
let yesBtnSize = 100;
let noBtnSize = 100;

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Increase Yes button size and decrease No button size
    yesBtnSize += 20;
    noBtnSize = Math.max(50, noBtnSize - 10);
    
    yesBtn.style.transform = `scale(${yesBtnSize / 100})`;
    noBtn.style.transform = `scale(${noBtnSize / 100})`;
});

yesBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    bgMusic.play();
    
    // Store the click in localStorage
    const clicks = JSON.parse(localStorage.getItem('yesClicks') || '[]');
    clicks.push({
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('yesClicks', JSON.stringify(clicks));
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    bgMusic.pause();
    bgMusic.currentTime = 0;
});