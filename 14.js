const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const loveImage = document.getElementById('love-image');
const container = document.querySelector('.container');

noBtn.onclick = () => {
    // You can add more animations or movement logic here
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.random() * (window.innerWidth - noBtn.offsetWidth)}px`;
    noBtn.style.top = `${Math.random() * (window.innerHeight - noBtn.offsetHeight)}px`;
};

yesBtn.onclick = () => {
    message.classList.remove('hidden');
    loveImage.classList.remove('hidden');
    messageContainer.style.display = 'flex';
    container.style.display = 'none';

    // Additional animation or other effects
    messageContainer.style.animation = 'fadeIn 1s';
};